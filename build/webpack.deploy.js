const fs = require('fs-extra');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const CopyPlugin = require("copy-webpack-plugin");
const settings = require('../config/settings');
const commonConfig = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const htmlTohtmWebpackPlugin = require('../plugins/html2htm-webpack-plugin');

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
                    filename: `${chunk}.htm`,
                    chunks: ['vendors', chunk]
                })
            );
        }else{
            chunk = item.split('.html')[0].split('/').join('_');
            htmlWebpackPluginResult.push(
                new HtmlWebpackPlugin({
                    template: path.resolve(settings.basePath,'src',settings.appId,'./templates/wap/index.html'),
                    filename: `${chunk}.htm`,
                    chunks: ['vendors', chunk]
                })
            );
        }
    });
    return htmlWebpackPluginResult;
}

const deployConfig = {
    mode: 'production',
    devtool: 'none',
    output: {
        filename: 'js/[name].[contenthash:8].js',
        chunkFilename: 'js/[name].[contenthash:8].js',
        path: path.resolve(settings.basePath, 'dist', settings.appId),
        publicPath: `//img1.37wanimg.com/${settings.appId}/`,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name][contenthash:8].content.css'
        }),
        new CopyPlugin([
            { from: path.join(settings.basePath,'src',settings.appId,'extras/'), to: path.join(settings.basePath,'dist',settings.appId,"extras/") }
        ]),
        // new htmlTohtmWebpackPlugin(settings.pages)
    ],
    performance: false,
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors'
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            }
        }
    },
}

let scssRule = null;
scssRule = {
    test: /\.scss$/i,
    use: [
        MiniCssExtractPlugin.loader,
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
deployConfig.module.rules.unshift(scssRule);

module.exports = merge(commonConfig, deployConfig);