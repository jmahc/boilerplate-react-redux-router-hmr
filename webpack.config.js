const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle-[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Clock',
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html'),
      chunks: ['index'],
    }),
    new ProgressBarPlugin({
      format: `  build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
