var path = require('path');
var webpack = require('webpack');
var polyfill = require('babel-polyfill');
module.exports = {
    entry: ['babel-polyfill', './app/app.js'],
    module: {
        loaders: [
            { test: /angular(\.min)?\.js$/, loader: "imports?$=jquery" },
            { test: /jquery(\.min)?\.js$/, loader: 'expose?jQuery!expose?$' },
            { test: /\.js$/, exclude: [/node_modules/, /vendor/], loaders: ['ng-annotate', 'babel?presets[]=es2015'] },
            { test: /\.html$/, exclude: /node_modules/, loader: 'raw-loader' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },            
            { test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, loader: 'file?limit=100000&name=../images/[name].[ext]' }
        ]
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, './public/js'),
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            output: {
                ascii_only: true
            }
        })
    ]
};