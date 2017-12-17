const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const manifest = require('./dist/vendor-manifest.json');

const webpackConfig = {
  context: __dirname,
  entry: { app: './src/index.js' },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(otf|ttf|ttc|eot|woff|woff2)$/,
        use: {
          loader: 'url-loader?limit=100000',
          options: {
            name: '[hash].[ext]',
            publicPath: '/',
          },
        },
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            publicPath: '/',
          },
        },
      },
      { test: /\.js?$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    }),
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest,
    }),
    new HtmlWebpackPlugin({
      favicon: './favicon.ico',
      template: './src/index.html',
      inject: false,
    }),
    new OfflinePlugin({
      caches: {
        main: ['app.js', 'index.html', 'favicon.ico', ':externals:'],
      },
      externals: ['vendor.js', '../statics/background.jpg'],
      responseStrategy: 'network-first',
      updateStrategy: 'changed',
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  const additionalPlugins = [
    new webpack.optimize.OccurrenceOrderPlugin(false),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true,
      },
    }),
  ];
  webpackConfig.plugins = webpackConfig.plugins.concat(additionalPlugins);
} else {
  const additionalPlugins = [new WebpackNotifierPlugin({ alwaysNotify: true })];
  webpackConfig.devtool = '#eval-source-map';
  webpackConfig.plugins = webpackConfig.plugins.concat(additionalPlugins);
}

module.exports = webpackConfig;
