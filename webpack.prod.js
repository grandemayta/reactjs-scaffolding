const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const dist = path.resolve(__dirname, './dist');

module.exports = merge(common, {
  output: {
    path: dist,
    filename: 'bundle.app.min.js'
  },
  plugins: [
    new UglifyJSPlugin(),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'bundle.vendor.min.js'
    })
  ]
});
