const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');
const DevServer = require('webpack-dev-server');

const config = {
    mode: 'development',
    entry: [
        // Runtime code for hot module replacement
        'webpack/hot/dev-server.js',
        // Dev server client for web socket transport, hot and live reload logic
        'webpack-dev-server/client/index.js?hot=true&live-reload=true',
        // Your entry
        './src/index.js',
    ],
    devtool: 'inline-source-map',
    // devServer: {
    //     static: './dist',
    //     hot: true,
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
const compiler = webpack(config);

// `hot` and `client` options are disabled because we added them manually
const server = new DevServer({ hot: false, client: false }, compiler);

(async () => {
  await server.start();
  console.log('dev server is running');
})();