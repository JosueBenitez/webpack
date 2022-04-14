const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
 
    mode: 'development',
 
    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },
 
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    // minimize: true
                }
            },
            {
                test: /\.css$/i,
                exclude: /style\.css$/i,
                use: ['style-loader','css-loader']
            },
            {
                test: /style\.css$/i,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
 
    optimization: {
    },
 
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi webpack app',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
                {from:'src/assets/', to:'assets/'}
            ]
        })
    ]
 
}