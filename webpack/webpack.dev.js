/* eslint-disable */
/* tslint:disabled */

/***_____IMPORTS______***/
const path    = require('path')
const webpack = require('webpack')
const { merge }   = require('webpack-merge')
const common  = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


console.clear()
console.log (  )
console.log('\x1b[0m\x1b[42m\x1b[30m%s\x1b[0m', 'dev-mode starting ...');


/*_____________CONTEXT_______________ */
const CONTEXT = path.resolve(__dirname, '../')
const SRC = `${CONTEXT}/src`

/*_____JS_LOADER_WITH_SOURCE_MAP______*/
const JS = {
  test: /\.js$/,
  enforce: 'pre',  
  use: [ 'source-map-loader' ],
}
/*_____CSS_LOADER_WITH_SOURCE_MAP_____*/
const CSS = {
  test: /\.css$/,
  use: [
     MiniCssExtractPlugin.loader,
    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, } }
  ],
  sideEffects: true,
}

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    server: 'http',
    bonjour: false,
    compress: false,
    allowedHosts: 'all', // allowedHosts: ['.host.com', 'host2.com'],
    historyApiFallback: true,
    // contentBase: './dist',
    hot: true,
    host: '127.0.0.7',
    port: 3001,
    open: true,
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
      reconnect: true,
    },
  },
  devtool: 'cheap-module-source-map', // 'source-map',
  module: {
    rules: [ CSS, JS ]
  },
  optimization: {
    minimize: false,
    usedExports: true
  },
  plugins:[
    new MiniCssExtractPlugin(),
  ]  
});
