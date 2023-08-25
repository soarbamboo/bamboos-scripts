const { merge } = require('webpack-merge');
const {
  shouldShowAnaly,
  commonConfig,
  prodCustomerConfig,
} = require('./common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(
  commonConfig,
  {
    mode: 'production',
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
        ignoreOrder: false,
      }),
      shouldShowAnaly &&
        new BundleAnalyzerPlugin({
          analyzerMode: 'server', // 开一个本地服务查看报告
          analyzerHost: '127.0.0.1', // host 设置
          analyzerPort: 8888, // 端口号设置
        }),
    ],
  },
  prodCustomerConfig
);
