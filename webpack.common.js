const Webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const src = path.resolve(__dirname, './src');
const dist = path.resolve(__dirname, './dist');


module.exports = {
  entry: {
    src: `${src}/bootstrap.js`,
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },
  output: {
    path: dist,
    filename: process.env.NODE_ENV === 'PROD' ? 'bundle.app.min.js' : 'bundle.app.js'
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
      template: 'index.template.ejs',
      filename: 'index.html'
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: process.env.NODE_ENV === 'PROD' ? 'bundle.vendor.min.js' : 'bundle.vendor.js'
    })
  ],
  resolve: {
    extensions: ['.js', 'css'],
    modules: ['node_modules', 'src'],
    alias: {
      core: path.resolve(__dirname, `${src}/core`),
      features: path.resolve(__dirname, `${src}/features`)
    }
  }
};
