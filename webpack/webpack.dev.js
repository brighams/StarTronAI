const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
    port: 8003,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: 'https://127.0.0.1:8001',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      }
    ],
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
      safe: true,
      defaults: true,
    }),
  ],
});
