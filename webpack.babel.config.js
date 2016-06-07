var path = require('path');
var config = require('./webpack.config')

config.output= {
  path: path.join(__dirname, 'dist'),
  filename: 'index.js',
  libraryTarget: 'umd'
}

config.entry = [
  './src/index',
  'babel-polyfill'
]
config.externals = ['react', 'react-dom', 'react-timer-mixin']
config.module = {
    loaders: [
      {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
      },
      {
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
    ]
  }

delete config.devtool

module.exports = config
