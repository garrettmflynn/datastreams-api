var path = require("path");
var webpack = require("webpack");

var PATHS = {
  entryPoint: path.resolve(__dirname, './index.ts'),
  bundles: path.resolve(__dirname, 'dist'),
}

var config = {
  entry: {
    'index': [PATHS.entryPoint],
    'index.min': [PATHS.entryPoint]
  },
  output: {
    path: PATHS.bundles,
    filename: '[name].js',
    library: {
      type: 'umd',
      name: 'datastreams',
      export: 'default',
      umdNamedDefine: true,
    },
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {}
  },
  devtool: 'source-map',
  module: {
    rules: [
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
  }
}

module.exports = config;