// ==== Node Modules
const chalk = require('chalk');
const path = require('path');
const webpack = require('webpack');
// ==== Webpack Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const port = 8080;

module.exports = {
  context: path.resolve(__dirname),
  // ==== The base directory, an absolute path, for resolving entry points and
  //      loaders from configuration.
  //
  //      - NOTE: By default the current directory is used, but it's recommended
  //              to pass a value in your configuration. This makes your configuration
  //              independent from CWD.
  //
  // Reference: https://webpack.js.org/configuration/entry-context/#context/

  devtool: 'inline-source-map',
  // ==== A SourceMap is added as DataUrl to the bundle. (For development only.)
  //      There are several options to choose from to enhance the debugging process.
  //
  // Reference: https://webpack.js.org/configuration/devtool/

  entry: [
  // ==== The point or points to enter the application.
  //      At this point the application starts executing.
  //      If an array is passed all items will be executed.
  //
  //      - NOTE 1: A dynamically loaded module is not an entry point.
  //      - NOTE 2: One entry point per HTML page.
  //      - NOTE 3: SPA's have one entry point.
  //      - NOTE 4: MPA's have multiple entry points.
  //
  // Reference: https://webpack.js.org/configuration/entry-context/#entry/


    'react-hot-loader/patch',
    // ==== Activates HMR for React
    //      - Required by `react-hot-loader`

    `webpack-dev-server/client?http://localhost:${port}`,
    // ==== Bundles the client for webpack-dev-server
    //      and connects the application to the port.

    'webpack/hot/only-dev-server',
    // ==== Bundles the client for hot reloading
    //
    //      - NOTE: `only-` means to hot reload only for successful updates

    path.join(__dirname, 'src', 'entry.js'),
    // ==== This is the entry point of our applicaiton
  ],

  output: {
  // ==== The top-level output key contains set of options instructing webpack on
  //      how and where it should output your bundles, assets and anything else
  //      that you bundle or load with webpack.
  //
  // Reference: https://webpack.js.org/configuration/output/


    filename: 'bundle.js',
    // ==== This option determines the name of each output bundle.
    //      The bundle is written to the directory specified by the { output.path } option.
    //
    // Reference: https://webpack.js.org/configuration/output/#output-filename/


    // path: path.resolve(__dirname),
    path: path.resolve(__dirname),
    // ==== The output directory as an absolute path.
    //
    // Reference: https://webpack.js.org/configuration/output/#output-path/

    pathinfo: true,
    // ==== Tells webpack to include comments in bundles with information about the
    //      contained modules. This option defaults to `false` and should NOT be used
    //      in production, but it's very useful in development when reading the generated code.
    //
    //      - NOTE: It also adds some info about tree shaking to the generated bundle.
    //
    // Reference: https://webpack.js.org/configuration/output/#output-pathinfo/

    publicPath: `http://localhost:${port}/`,
    // ==== This is an important option when using on-demand-loading or loading external resources
    //      like images, files, etc. If an incorrect value is specified you'll receive 404 errors
    //      while loading these resources.
    //      - This specifies the public URL of the output directory when referenced in a browser
    //      - A relative URL is resolved relative to the HTML page (or <base> tag)
    //      - Server-relative URLs, protocol-relative URLs or absolute URLs are also possible
    //        and sometimes required, i.e. when hosting assets on a CDN.
    //      - The default value is an empty string "".
    //
    //      - NOTE: The value is prefixed to every URL created by the runtime or loaders.
    //              Because of this the value of this option ends with "/" in most cases.
    //
    // Reference: https://webpack.js.org/configuration/output/#output-publicpath/

    sourceMapFilename: '[file].map',
    // ==== Only used when `devtool` uses a SourceMap option, which writes an output file.
    //      - Configure how source maps are named.
    //      - By default "[file].map" is used.
    //
    // Reference: https://webpack.js.org/configuration/output/#output-sourcemapfilename/
  },

  devServer: {
    clientLogLevel: 'info',
    // ==== When using inline mode, the console in your DevTools will show you messages.
    //      (e.g. before reloading, before an error or when Hot Module Replacement is enabled)
    //      - Used in-tandem with `redux-devtools`
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-clientloglevel/

    compress: true,
    // ==== Enables gzip compression for everything served to allow for smaller file sizes.
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-compress/
    // gzip Reference: https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/

    contentBase: __dirname,
    // ==== Tells the server where to serve content from.
    //      - This is only necessary if you want to serve static files.
    //      - { devServer.publicPath } will be used to determine WHERE the bundles
    //      should be served from, and takes precedence.
    //
    //      - NOTE: Matches { output.path }
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-contentbase/

    headers: { 'X-Custom-Header': 'yes' },
    // ==== Adds headers to all requests.
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-headers-/

    historyApiFallback: true,
    // ==== HTML5's history API, `index.html` will `likely` be served in place of any 404 responses
    //      - It is possible to override this in `routes.js`
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-historyapifallback/

    host: 'localhost',
    // ==== Specify a host to use. By default this is `localhost`.
    //
    //      - NOTE: If you want your server to be accessible externally, specify it like this:
    //      host: "0.0.0.0"
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-host-cli-only/

    hot: true,
    // ==== Enable webpack's Hot Module Replacement feature
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-hot/

    https: false,
    // ==== By default dev-server will be served over HTTP.
    //      It can optionally be served over HTTP/2 with HTTPS.
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-https/

    inline: true,
    // ==== Toggle between the dev-server's two different modes.
    //      By default the application will be served with inline mode enabled.
    //      This means that a script will be inserted in your bundle to take care of live reloading,
    //      and build messages will appear in the browser console.
    //      - It is also possible to use iframe mode, which uses an <iframe> under a
    //        notification bar with messages about the build.
    //
    //      - NOTE: Required for Hot Module Replacement
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-inline-cli-only/

    lazy: false,
    // ==== When lazy is enabled, the dev-server will only compile the bundle when it
    //      gets requested. This means that webpack will not watch any file changes.
    //      We call this lazy mode.
    //      - `watchOptions` will have no effect when used with lazy mode
    //      - If you use the CLI, make sure inline mode is disabled.
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-lazy-/

    noInfo: true,
    // ==== With `noInfo` enabled, messages like the webpack bundle information that is
    //      shown when starting up and after each save, will be hidden.
    //      - Errors and warnings will still be shown.
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-noinfo-/

    open: true,
    // ==== While Webpack builds, the user's default OS browser will open to the application's port

    port: port,
    // ==== Port number where the server can be accessed

    publicPath: '/',
    // ==== The bundled files will be available in the browser under this path.
    //      - Imagine that the server is running under http://localhost:8080 and
    //        { output.filename } is set to bundle.js. By default the `publicPath` is "/",
    //        so your bundle is available as http://localhost:8080/bundle.js.
    //
    //      - NOTE 1: match the { output.publicPath }
    //      - NOTE 2: Make sure `publicPath` always starts and ends with a forward slash.
    //      - NOTE 3: It is also possible to use a full URL. This is necessary for HMR.
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-publicpath-/

    quiet: false,
    // ==== With quiet enabled, nothing except the initial startup information will be written
    //      to the console. This also means that errors or warnings from webpack are not visible.
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-quiet-/

    stats: 'errors-only',
    // ==== This option lets you precisely control what bundle information gets displayed.
    //      This can be a nice middle ground if you want some bundle information, but not all of it.
    //      - NOTE: `errors-only` only outputs when errors happen
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-stats-/

    watchContentBase: false,
    // ==== Tell the server to watch the files served by the { devServer.contentBase } option.
    //      File changes will trigger a full page reload.
    //
    //      - NOTE: It is disabled by default.
    //
    // Reference: https://webpack.js.org/configuration/dev-server/#devserver-watchcontentbase/
  },

  module: {
  // ==== Determines how the different types of modules within a project will be treated.
  //
  // Reference: https://webpack.js.org/configuration/module/

    rules: [
    // ==== An array of Rules which are matched to requests when modules are created.
    //      These rules can modify how the module is created.
    //      They can apply loaders to the module, or modify the parser.
    //
    // Reference: https://webpack.js.org/configuration/module/#module-rules/

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
          path.join(__dirname, 'src', 'components'),
          path.join(__dirname, 'src', 'containers'),
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
  // ==== These options change how modules are resolved.
  //      Webpack provides reasonable defaults, but it is possible to change:
  //      Reference: https://webpack.js.org/concepts/module-resolution/
  //
  // Reference: https://webpack.js.org/configuration/resolve/

    descriptionFiles: [
      'package.json',
    ],
    // ==== These JSON files are referenced for conifgurations.
    //      e.g. `eslint` if not in its own file or `package.json`
    //
    // Reference: https://webpack.js.org/configuration/resolve/#resolve-descriptionfiles/

    enforceExtension: false,
    // ==== If true, it will not allow extension-less files.
    //      So by default `require('./foo')` works if `./foo` has a
    //      `.js` extension, but with this enabled only `require('./foo.js')` will work.
    //
    // Reference: https://webpack.js.org/configuration/resolve/#resolve-enforceextension/

    extensions: [
      '.jsx',
      '.js',
      '.json',
    ],
    // ==== Automatically resolve certain extensions.
    //
    // Reference: https://webpack.js.org/configuration/resolve/#resolve-extensions/

    modules: [
      'src',
      'node_modules',
    ],
    // ==== Tells webpack what directories should be searched when resolving modules.
    //      - relative paths are looked up in every parent folder (like node_modules)
    //      - absolute paths are looked up directly
    //      - the order is respected
    //
    //      - NOTE: Defaults to `modules: ["node_modules"]`
    //
    // Reference: https://webpack.js.org/configuration/resolve/#resolve-modules/
  },
};
