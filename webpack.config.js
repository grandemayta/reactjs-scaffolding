const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');


module.exports = {
  entry: {
    src: `${src}/index.jsx`,
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: dist,
    filename: 'bundle.js'
  },
  devServer: {
    port: 3002,
    open: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      filename: 'index.html'
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'bundle.vendor.js',
      minChunks: Infinity
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src']
  }
};
