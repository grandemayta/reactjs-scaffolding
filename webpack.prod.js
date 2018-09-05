const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const dist = path.resolve(__dirname, './dist');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: dist,
    filename: 'bundle.app.min.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.style.min.css'),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'bundle.vendor.min.js'
    })
  ]
});
