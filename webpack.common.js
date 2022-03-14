var path = require('path');
var webpack = require('webpack');

// html webpack plugin
var HtmlWebpackPlugin = require('./webpack-plugins/html-webpack-plugins.js');

// 
module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    HtmlWebpackPlugin(),
  ],
  module: {
    rules: [],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};