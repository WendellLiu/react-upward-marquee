var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: ['react', 'react-dom', 'react-timer-mixin'],
  module: {
    loaders: [
      {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
    ]
  },
  resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.scss']
    }
};
