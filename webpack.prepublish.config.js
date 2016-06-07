var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './dist/index'
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: ['react', 'react-dom', 'react-timer-mixin'],
  resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.scss']
    }
};
