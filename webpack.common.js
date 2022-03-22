var path = require('path');
var webpack = require('webpack');

// html webpack plugin
var HtmlWebpackPlugin = require('./webpack-plugins/html-webpack-plugins.js');

// react rule
var reactRule = require('./webpack-rules/react-rule.js');

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
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};