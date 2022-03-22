var path = require('path');
var webpack = require('webpack');

// html webpack plugin
var HtmlWebpackPlugin = require('./webpack-plugins/html-webpack-plugins.js');

// react rule
var reactRule = require('./webpack-rules/react-rule.js');

// sass rule
var sassRule = require('./webpack-rules/sass-rule.js');

// 
module.exports = {
  entry: {
    react: './src/react.js'
  },
  plugins: [
    HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      reactRule,
      sassRule,
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};