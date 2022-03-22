/**
 * webpack support sass by sass-loader
 *  npm install -D sass-loader css-loader style-loader sass
 */
module.exports = {
  test: /\.scss$/i,
  use: [
    "style-loader",
    "css-loader",
    "sass-loader",
  ],
};