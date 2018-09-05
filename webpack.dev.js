const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const dist = path.resolve(__dirname, './dist');

module.exports = merge(common, {
  output: {
    path: dist,
    filename: 'bundle.app.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: dist,
    port: 3002,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new ExtractTextPlugin('bundle.style.css'),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'bundle.vendor.js'
    })
  ]
});
