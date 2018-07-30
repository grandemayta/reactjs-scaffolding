const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    src: `${src}/app/index.js`,
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'prop-types'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new HtmlWebpackPlugin({
      template: `${src}/app/index.html`,
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules', 'src']
  }
};
