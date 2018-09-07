const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const SshWebpackPlugin = require('ssh-webpack-plugin');
const webpack = require('webpack');

const common = require('../build/webpack.common');
const testConfig = require('./test-deploy.json');
const productionConfig = require('./production-deploy.json');
const fileType = process.argv[2];

let dirName = (new Date()).toLocaleDateString() + ".tar.gz";
let config = fileType === 'test' ? testConfig : productionConfig;

var webpackConfig = merge(common, {
  plugins: [
    new SshWebpackPlugin({
      host: config.host,
      username: config.username,
      password: config.password,
      before: ['tar -zcvf ' + config.fileName + dirName + ' ' + config.path, 'rm -rf ' + config.path, 'mkdir ' + config.path],
      from: './dist',
      to: config.path,
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  mode: 'production'
});

webpack(webpackConfig, (err, stats) => {
  if (err) throw err;
  // 输出打包信息
  process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
  }) + '\n\n');

});

