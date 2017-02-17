const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const webpackIsomorphicTools =  require('./webpack-isomorphic-tools')
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(webpackIsomorphicTools)

const webpack = require('webpack')

const config = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        webpackIsomorphicToolsPlugin.development(),
        // new webpack.optimize.UglifyJsPlugin({
        //   	compressor: {
        //     	warnings: false,
        //   	},
        // }),
        // new webpack.optimize.OccurrenceOrderPlugin(),
    ]
}

module.exports = config

