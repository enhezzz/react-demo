const {resolve,join} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
 
  mode: 'development',
   // 配置页面入口js文件
  entry:resolve(__dirname,'../index.js'),
  output: {
    path: resolve(__dirname, './dist'),
    filename: '[name].[chunkhash:8].index.js',
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
      template: resolve(__dirname,'../index.html'),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: join(__dirname,'../static')
      }
    ])
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
    historyApiFallback: true,
    contentBase: join(__dirname, "../dist"),
      proxy: {
          "/**": {
              target: "http://localhost",
              bypass: function(req, res, proxyOptions) {
                  if (req.headers.accept.indexOf("html") !== -1) {
                      console.log("Skipping proxy for browser request.");
                      return "/index.html";
                  }
              }
          }
      }
  },

}