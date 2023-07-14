const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
var DeclarationBundlerPlugin = require('types-webpack-bundler');

module.exports = merge(common, {
  mode: "production",
  target: "web",
  devtool: 'source-map',
  entry: {
    index: './src/index.ts'
  },
  plugins: [
        new DeclarationBundlerPlugin({
            moduleName: '@klingen/location-search',
            out:'./location-search.d.ts',
        })
  ],
  output: {
    filename: 'location-search.js',
    library: 'LocationSearch',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});
