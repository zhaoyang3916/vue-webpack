const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const rules = require('./rules');
const paths = require('./config/paths');


module.exports = {
  entry: {
    app: path.resolve(paths.src, 'index.js')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.src, 'index.html')
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.vue'],
    alias: { 'vue': 'vue/dist/vue.js' }
  },
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    // path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    // runtimeChunk: 'single', //运行时的js
    splitChunks: {
      cacheGroups: {
        verdor: {
          //加载node_modules所有依赖
          test: /[\\/]node_modules[\\/]/,
          name: 'verdors',
          chunks: 'all'
        }
      }
    }
  }
};