const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const appPath = path.join(__dirname, './app');
const distPath = path.join(__dirname, './dist');


module.exports = {

    entry: {
        app: appPath + '/core',
        vendor: [
            'react',
            'react-dom'
        ]
    },

    output: {
        path: distPath,
        filename: 'bundle.app.js'
    },

    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        historyApiFallback: true
    },

    plugins: [

        new ExtractTextPlugin('style.css'),

        new HtmlWebpackPlugin({
            template: 'index.template.ejs',
            inject: true,
            hash: true
        }),

        new Webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'bundle.vendor.js',
            minChunks: Infinity
        })

    ],

    resolve: {
        modules: ['node_modules']
    }

};


if (process.env.NODE_ENV === 'production') {

    module.exports.plugins = (module.exports.plugins || []).concat([

        new CleanWebpackPlugin([distPath], {
            root: path.join(__dirname, './'),
            verbose: true,
            dry: false
        }),

        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new Webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),

        new Webpack.LoaderOptionsPlugin({
            minimize: true
        })

    ]);

}