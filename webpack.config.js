var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public')
var SRC_DIR = path.resolve(__dirname, 'src')

let config = {
  entry: SRC_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },{
      test: /\\.css$/,  loader: "style-loader!css-loader"
    },{
      test: /\\.(ttf|eot|svg)$/, loader: "file-loader"
    },{
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: SRC_DIR + '/index.html'
  })]
}

module.exports = config;
