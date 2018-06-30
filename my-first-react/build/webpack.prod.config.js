const config = require('./webpack.config');
const merge = require('webpack-merge');
const {resolve} = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = merge(config, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash:8].index.js'
    },
    plugins: [
        new CleanWebpackPlugin([
            resolve(__dirname,'../dist')
        ]),
        // new ExtractTextPlugin({
        //     filename: '[name].[contenthash:8].css'
        // })
    ]
})