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
    // ==== The output bundle's filename that is injected via `HtmlWebpackPlugin`

    path: __dirname,
    // ==== The output location for our Webpack generated files.

    publicPath: `http://localhost:${port}/`,
    // ==== Necessary for HMR to know where to load the hot update chunks
  },

  devServer: {
    clientLogLevel: 'info',
    // ==== Used in-tandem with `redux-devtools`
    //      When using inline mode, the console in your DevTools will show you messages:
    //      e.g. before reloading, before an error or when Hot Module Replacement is enabled.

    compress: true,
    // ==== Enables gzip compression for everything served for smaller file sizes.

    contentBase: __dirname,
    // ==== Matches { output.path }
    //      Tell the server where to serve content from.

    historyApiFallback: true,
    // ==== HTML5 History API, `index.html` will `likely` be served in place of any 404 responses
    //      - It is possible to override this in `routes.js`

    hot: true,
    // ==== Enable webpack's Hot Module Replacement feature

    inline: true,
    // ==== Required for Hot Module Replacement

    open: true,
    // ==== While Webpack builds, the user's default browser will open to the correct port

    port: port,
    // ==== Port number where the server can be accessed

    publicPath: '/',
    // ==== Note: match the { output.publicPath }

    stats: 'errors-only',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/,
        ],
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /\.json$/,
        exclude: [
          /node_modules/,
        ],
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
        test: /\.scss/,
        exclude: [
          /node_modules/,
        ],
        include: [
          path.join(__dirname, 'src/components'),
          path.join(__dirname, 'src/containers'),
        ],
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
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

      // For injecting content (options) into `index.html`
      title: 'React Clock',
    }),
    // ==== Outputs an HTML file with our code.

    new ProgressBarPlugin({
      format: `  building webpack... [:bar] ${chalk.green.bold(':percent')} (It took :elapsed seconds to build)\n`,
      clear: false,
    }),
    // ==== Displays a progress bar on the console for Webpack's build process.

    new webpack.HotModuleReplacementPlugin(),
    // ==== Enables Hot Module Replacement

    new webpack.NoErrorsPlugin(),
    // ==== When there are errors while compiling this plugin skips the emitting phase
    //      (and recording phase), so there are no assets emitted that include errors.

    new webpack.NamedModulesPlugin(),
    // Default?

    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: [
            path.resolve(__dirname, './src'),
          ],
          outputStyle: 'expanded',
          sourceMap: true,
        },
        context: path.join(__dirname),
      },
    }),
    // ==== Custom `sass-loader` options that adheres to Webpack's v2.0 API

    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    // ==== Allows the creation of global constants which can be configured at compile time
  ],
  resolve: {
    descriptionFiles: [
      'package.json',
    ],
    // ==== These JSON files are referenced for conifgurations.
    //      e.g. `eslint` if not in its own file.

    enforceExtension: false,
    // ==== If false it will also try to use an extension from below

    extensions: [
      '.jsx',
      '.js',
      '.json',
    ],
    // ==== These extensions are tried when resolving a file

    modules: [
      'src',
      'node_modules',
    ],
    // ==== In which folders the resolver look for modules
    //      - relative paths are looked up in every parent folder (like node_modules)
    //      - absolute paths are looked up directly
    //      - the order is respected
  },
};
