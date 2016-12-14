/**
 * Created by Andra on 01-Nov-16.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel?presets[]=es2015,presets[]=react'],
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
            },
        ]
    },
    plugins: [
        // set node env
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),

        new ExtractTextPlugin('bundle.css', { allChunks: true, }),
    ],
    // needed to make request-promise work
    node: {
        net: 'empty',
        tls: 'empty',
    },
    devtool: 'source-map',
};