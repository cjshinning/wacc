const path = require('path');
const fs = require('fs');
const settings = require('../config/settings');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const glob = require("glob");
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

function createSpritesmithPlugin() {
    const spritesmithPluginResult = [
        // 默认的雪碧图
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(settings.basePath, 'src', settings.appId, 'src/assets/pc/ico'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(settings.basePath, 'src', settings.appId, 'src/assets/pc/img/sprite.png'),
                css: path.resolve(settings.basePath, 'src', settings.appId, 'src/assets/pc/css/sprite.scss')
            },
            apiOptions: {
                cssImageRef: process.env.NODE_ENV === 'development' ? '/src/assets/pc/img/sprite.png' : '../img/sprite.png'
            },
            spritesmithOptions: {
                padding: 10,
                algorithm: "binary-tree"
            }
        }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(settings.basePath, 'src', settings.appId, 'src/assets/wap/ico'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(settings.basePath, 'src', settings.appId, 'src/assets/wap/img/sprite.png'),
                css: path.resolve(settings.basePath, 'src', settings.appId, 'src/assets/wap/css/sprite.scss')
            },
            apiOptions: {
                cssImageRef: process.env.NODE_ENV === 'development' ? '/src/assets/wap/img/sprite.png' : '../img/sprite.png'
            },
            spritesmithOptions: {
                padding: 10,
                algorithm: "binary-tree"
            }
        })
    ];

    const platformFiles = ['pc', 'wap'];


    platformFiles.forEach(platformFile => {
        const componentDir = path.resolve(settings.basePath, 'src', settings.appId, 'src/components', platformFile);
        const componentIconDirs = glob.sync(componentDir + '/**/ico');

        componentIconDirs.forEach(componentIconDir => {
            const re = new RegExp(`components\/${platformFile}\/(.*)\/`);
            const componentName = componentIconDir.match(re)[1].replace(/-/g, '_');

            // 每个组件里面的雪碧图
            spritesmithPluginResult.push(
                new SpritesmithPlugin({
                    src: {
                        cwd: componentIconDir,
                        glob: '*.png'
                    },
                    target: {
                        image: componentIconDir.match(/(\/.*\/)ico/)[1] + 'img/sprite_' + componentName + '.png',
                        css: componentIconDir.match(/(\/.*\/)ico/)[1] + 'css/sprite.scss',
                    },
                    apiOptions: {
                        cssImageRef: './img/sprite_' + componentName + '.png'
                    },
                    spritesmithOptions: {
                        padding: 10,
                        algorithm: "binary-tree"
                    }
                })
            )
        })
    })

    return spritesmithPluginResult;
}


function createEntries() {
    const entries = {};
    settings.pages.forEach(item => {
        let entryKey = '';
        let entryPath = '';
        if (item.indexOf('wap') === -1) {
            entryKey = item.split('.html')[0];
            entryPath = path.resolve(settings.basePath, 'src', settings.appId, 'src/pages/', entryKey, './index.js');
        } else {
            const reg = /^wap\/(.*).html$/;
            entryKey = item.split('.html')[0].split('/').join('_');
            entryPath = path.resolve(settings.basePath, 'src', settings.appId, 'src/pages/wap/', reg.exec(item)[1], './index.js');
        }
        entries[entryKey] = entryPath;
    })
    return entries;
}


module.exports = {
    entry: createEntries(),
    resolve: {
        extensions: ['.js', '.jsx', '.vue']
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                include: path.resolve(settings.basePath, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ],
                        cacheDirectory: true
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|ts)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'medias/[name]-[hash:5].[ext]'
                    }
                }
            },
            {
                test: /\.vue$/i,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    },
    plugins: [
        ...createSpritesmithPlugin(),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        // new FriendlyErrorsWebpackPlugin(),
    ],
    // performance: false,
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            name: true,
            cacheGroups: {
                default: false,
                vendors: false,
                // common: {
                //     minChunks: 2,
                //     priority: 10,
                //     reuseExistingChunk: true,
                //     name:'common'
                // },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 20,
                    name: 'vendor'
                }
            }
        }
    },
};