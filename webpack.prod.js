const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  target: "web",
  entry: {
    index: './src/index.ts'
  },
  output: {
    filename: 'location-search.js',
    library: 'LocationSearch',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});
