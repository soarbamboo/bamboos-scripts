const { merge } = require('webpack-merge');
const {
  SERVER_HOST,
  SERVER_PORT,
  commonConfig,
  customerConfig,
} = require('./common');

module.exports = merge(
  commonConfig,
  {
    mode: 'development',
    devtool: 'eval-source-map',
    target: 'web',
    devServer: {
      host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
      port: SERVER_PORT, // 指定端口，默认是8080
      // stats: 'errors-only', // 终端仅打印 error
      client: {
        logging: 'info',
        progress: false, // 在浏览器中以百分比形式打印编译进度
        overlay: {
          warnings: false,
          errors: false,
        }, // 出现错误时全屏覆盖
      }, // 日志等级
      compress: true, // 是否启用 gzip 压缩
      open: false, // 打开默认浏览器
      hot: true, // 热更新
      proxy: {
        // '/api': 'http://localhost:3000',
      },
    },
  },
  customerConfig
);
