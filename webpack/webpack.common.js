/* eslint-disable */
/* tslint:disabled */

const path = require('path')
const webpack = require('webpack')
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


/*_____________CONTEXT_______________ */
const CONTEXT = path.resolve(__dirname, '../')
const ASSET_PATH = process.env.ASSET_PATH || '/'
/* __________ENTRY__POINT_____________*/
const $ENTRY = './src/index.js'

/*____________OPTIONS_________________*/
const htmlPluginOptions = {
  inject: 'body',
  template: `${CONTEXT}/src/index.html`,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeScriptTypeAttributes: false,
    useShortDoctype: true,        
    keepClosingSlash: true,
    minifyJS: false,
    minifyCSS: false,
    minifyURLs: false,
  }
}

module.exports = {
  context: CONTEXT,
  entry: {
   app: $ENTRY
  },
  output: {
    filename: '[contenthash].js',
    path: `${CONTEXT}/dist`,
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [ ]
  },
  resolve: {
    extensions: [ '.js' ],
    alias: {
     'react-dom': '@hot-loader/react-dom',
      pages:      `${CONTEXT}/src/pages`,
      layouts:    `${CONTEXT}/src/layouts`,
      components: `${CONTEXT}/src/components`,
      resources:  `${CONTEXT}/src/resources`,
      tables:     `${CONTEXT}/src/tables`,
      stores:     `${CONTEXT}/src/stores`,
      styled:     `${CONTEXT}/src/styled`,
      ts:         `${CONTEXT}/src/typescript`,
      algs:       `${CONTEXT}/src/typescript/algorithms`,
      webgl:      `${CONTEXT}/src/webgl`,
      polyfills:  `${CONTEXT}/src/polyfills`,
      resources:  `${CONTEXT}/public/resources`,
      workers:    `${CONTEXT}/public/workers`,
      css:        `${CONTEXT}/src/css`,
      imgs:       `${CONTEXT}/public/imgs`,
      themes:     `${CONTEXT}/src/themes`,
    },
  },
  plugins: [
    new HtmlWebpackPlugin(htmlPluginOptions),
    new HtmlInlineScriptPlugin()
  ],
}