const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const port = 8080;

module.exports = {
  context: __dirname,

  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    `webpack-dev-server/client?http://localhost:${port}`,
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    path.join(__dirname, 'src', 'entry.js'),
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    // the output bundle

    path: __dirname,
    // path: path.resolve(__dirname, 'dist'),
    // the output location

    publicPath: `http://localhost:${port}/`,
    // publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },

  devServer: {
    clientLogLevel: 'info',
    // When using inline mode, the console in your DevTools will show you messages
    // e.g. before reloading, before an error or when Hot Module Replacement is enabled.

    compress: true,
    // enables gzip compression for everything served

    contentBase: __dirname,
    // contentBase: path.resolve(__dirname, 'dist'),
    // Tell the server where to serve content from.
    // match the output path

    historyApiFallback: true,
    // HTML5 History API, `index.html` will likely have be served in place of any 404 responses

    hot: true,
    // Enable webpack's Hot Module Replacement feature

    inline: true,
    // requred for Hot Module Replacement

    open: true,
    // opens the user's default web browser after webpack build completes

    port: port, // eslint-disable-line object-shorthand
    // where the server is hosted

    publicPath: '/',
    // match the output `publicPath`

    stats: 'errors-only',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: [
          'json-loader',
        ],
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      // chunks: ['index'],
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, 'public', 'index.html'),

      title: 'React Clock',
    }),
    new ProgressBarPlugin({
      format: `  building webpack... [:bar] ${chalk.green.bold(':percent')} (It took :elapsed seconds to build)\n`,
      clear: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    // enables HMR

    new webpack.NoErrorsPlugin(),

    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    // allows you to create global constants which can be configured at compile time
  ],
  resolve: {
    descriptionFiles: [
      'package.json',
    ],
    // These JSON files are read in directories

    enforceExtension: false,
    // If false it will also try to use no extension from below

    extensions: ['.jsx', '.js', '.json'],
    // These extensions are tried when resolving a file

    modules: [
      'src',
      'node_modules',
    ],
    // (was split into `root`, `modulesDirectories` and `fallback` in the old options)
    // In which folders the resolver look for modules
    // relative paths are looked up in every parent folder (like node_modules)
    // absolute paths are looked up directly
    // the order is respected
  },
};
