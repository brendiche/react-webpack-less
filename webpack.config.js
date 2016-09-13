var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LessPluginCleanCSS = require('less-plugin-clean-css');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: [APP_DIR+'/index.jsx',APP_DIR+'/index.less'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    pubilcPath: '/dist/'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.resolve(__dirname),
        exclude : /(node_modules)/,
        loader : 'babel'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
        loader: 'url'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css")
  ],
  lessLoader: {
    lessPlugins: [
      new LessPluginCleanCSS({advanced: true})
    ]
  }
};

module.exports = config;
