const merge = require('webpack-merge');
const dev = require('./webpack.dev.js');
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = merge(dev, {
        mode: 'production',
            optimization: {
                namedModules: true,
                minimizer: [
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            ecma: 8,
                            warnings: false,
                            compress: true,
                            output: {
                                comments: false,
                                beautify: false,
                            },
                            safari10: false,
                        }
                    })
                ]
            }
});