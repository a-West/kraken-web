var path = require('path');
var webpack = require('webpack');
var polyfill = require('babel-polyfill');
module.exports = {
  entry: ['babel-polyfill', './app/app.js'],
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/, /vendor/], loaders: ['ng-annotate', 'babel?presets[]=es2015'] },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' },
        { test: /\.html$/, exclude: /node_modules/, loader: 'raw-loader' },
         {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  devServer: {
    contentBase: './public'
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, './public/js'),
    publicPath: '/js'
  },
  node: {
  fs: "empty",
    net: 'empty',
      tls: 'empty'
},
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   },
    //   output: {
    //     ascii_only: true
    //   }
    // })
  ]
};