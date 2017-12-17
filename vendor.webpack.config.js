const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'immutable',
      'lodash',
      'material-ui',
      'material-ui-icons',
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'react-tap-event-plugin',
      'redux',
      'redux-immutable',
      'redux-saga',
      'reselect',
      'styled-components',
      'whatwg-fetch',
    ],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    library: '[name]',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    }),
    new webpack.DllPlugin({
      path: 'dist/[name]-manifest.json',
      name: '[name]',
    }),
  ],
};
