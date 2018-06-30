const webpack = require('webpack')
const {join} = require('path')
const merge = require('webpack-merge');
const config = require('./webpack.config')
module.exports = merge(config, {
    mode: 'development',
    output: {
        filename: '[name].[hash:8].index.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({})
    ],
    //用于定位开发环境中的错误
    devtool: 'eval-source-map',
    /*
     配置开发时用的服务器, 让你可以用 http://127.0.0.1:8080/ 这样的url打开页面来调试
     并且带有热更新的功能, 打代码时保存一下文件, 浏览器会自动刷新. 比nginx方便很多
     如果是修改css, 甚至不需要刷新页面, 直接生效. 这让像弹框这种需要点击交互后才会出来的东西调试起来方便很多.
     */
    devServer: {
        // 配置监听端口, 因为8080很常用, 为了避免和其他程序冲突, 我们配个其他的端口号
        port: 8080,
        //可以ip访问，通常用于同网测试使用
        host: "0.0.0.0",
        disableHostCheck: true,
        hot: true,
        historyApiFallback: true,
        contentBase: join(__dirname, "../dist"),
        proxy: {
            "/**": {
                target: "http://localhost",
                bypass: function (req, res, proxyOptions) {
                    if (req.headers.accept.indexOf("html") !== -1) {
                        console.log("Skipping proxy for browser request.");
                        return "/index.html";
                    }
                }
            }
        }
    }
})