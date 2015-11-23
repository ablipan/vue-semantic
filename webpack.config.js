/*
* @Author: lipan
* @Date:   2015-11-23 16:28:39
* @Last Modified by:   lipan
* @Last Modified time: 2015-11-23 17:54:31
*/
const webpack = require('webpack')
const path = require('path')
module.exports = {
  entry: {
    'vue-semantic': './src/index.js'
  },
  output: {
    filename: './dist/[name].js'
  },
  resolve: {
    root: path.resolve('./')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = 'source-map'
}
