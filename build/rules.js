const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = require('./config/paths');

const scripts = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
};
const stylecss = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader'
  })
};
const styleless = {
  test: /\.(less)$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader' },
      { loader: 'less-loader' }
    ]
  })
};
// const templates = {
//   test: /.html$/,
//   exclude: [path.resolve(__dirname, './node_modules'), path.resolve(paths.src, 'index.html')],
//   loader: [
//     {
//       loader: 'ngtemplate-loader'
//     },
//     {
//       loader: 'html-loader'
//     }
//   ]
// };

const imgs = {
  test: /\.(png|jpg|gif|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/'
      }
    }
  ]
};
const fonts = {
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: 'fonts/[name].[hash:7].[ext]'
  }
};

const vue = {
  test: /\.vue$/,
  use: 'vue-loader'
};

let rules = [
  scripts,
  stylecss,
  styleless,
  imgs,
  fonts,
  vue
];

module.exports = rules;