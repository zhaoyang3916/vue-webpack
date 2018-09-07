const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common,{
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
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