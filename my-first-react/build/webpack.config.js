const {resolve, join} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    // 配置页面入口js文件
    entry: ["babel-polyfill", resolve(__dirname, '../index.js')],
    output: {
        path: resolve(__dirname, '../dist')
        // chunkFilename: '[name].[chunkhash:8].index.js',
    },

    module: {

        rules: [
            {
                test: /\.(js|jsx)$/,
                // 排除node_modules目录下的文件, npm安装的包不需要编译
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                // 匹配.css文件
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../index.html'),
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: join(__dirname, '../static')
            }
        ])
    ]
}