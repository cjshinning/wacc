const path = require('path');
const merge = require('webpack-merge');
const settings = require('../config/settings');
const commonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function createHtmlWebpackPlugin(){
    const htmlWebpackPluginResult = [];
    settings.pages.forEach(item => {
        let chunk = '';
        let templatePath = '';
        if(item.indexOf('wap') === -1){
            chunk = item.split('.html')[0];
            templatePath = `./templates/pc/${chunk}.html`;
            // console.log(chunk, templatePath);
            htmlWebpackPluginResult.push(
                new HtmlWebpackPlugin({
                    template: path.resolve(settings.basePath,'src',settings.appId,'./templates/pc/index.html'),
                    filename: item,
                    chunks: ['vendor', chunk]
                })
            );
        }else{
            chunk = item.split('.html')[0].split('/').join('_');
            templatePath = `./templates/wap/${chunk.split('_')[1]}.html`;
            // console.log(chunk, templatePath);
            htmlWebpackPluginResult.push(
                new HtmlWebpackPlugin({
                    template: path.resolve(settings.basePath,'src',settings.appId,'./templates/wap/index.html'),
                    filename: item,
                    chunks: ['vendor', chunk]
                })
            );
        }
    });
    return htmlWebpackPluginResult;
}

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(settings.basePath,'dist',settings.appId),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(settings.basePath,'src',settings.appId),
        open: true,
        hot: true,
        quiet: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash:8].[ext]',
                        outputPath: 'images',
                        limit: 10240,
                    }
                }
            },
        ]
    },
    plugins: [
        ...createHtmlWebpackPlugin(),
    ]
}

let scssRule = null;
scssRule = {
    test: /\.scss$/i,
    use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        'postcss-loader',
        'sass-loader'
    ]
};
devConfig.module.rules.unshift(scssRule);


module.exports = merge(commonConfig, devConfig);