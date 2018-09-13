const merge = require('webpack-merge');
const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common,{
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename:'css/styles.css',
      disable: true
    })
  ],
  devServer: {
    contentBase: './dist',
    port: 8000,
    hot: true,
    proxy: [{
      context: ['/api'],
      target: 'http://192.168.0.53',
    }]
    
  },
  mode: 'development'
});