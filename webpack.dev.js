'use strict';

/**
 * Webpack Constants
 */
const webpack = require('webpack');
const webpackCommonConfig = require('./webpack.common.config.js');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./common/config');

module.exports = function () {
    return webpackMerge(webpackCommonConfig(), {
        
        debug: true,
        profile: true,
        bail: true,

        devtool: 'source-map',

        devServer: {
            contentBase: './',
            historyApiFallback: true,
            proxy: {
                "**": "http://localhost:" + config.port
            }
        }
    });
};