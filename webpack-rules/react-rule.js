/**
 * webpack support react by babel-loader
 *  npm install -D babel-loader @babel/core @babel/preset-react
 */
module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: { presets: ["@babel/preset-react"] }
};