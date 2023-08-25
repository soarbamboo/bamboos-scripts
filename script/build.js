#! /usr/bin/env node
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.on('unhandledRejection', (err) => {
  throw err;
});
const path = require('path');
const hostPath = path.resolve(__dirname, '../');
const filePath = path.resolve(hostPath, './webpack/webpack.prod.js');
const spawn = require('child_process').spawn;
const cwd = process.cwd();
const runBuild = async () => {
  await new Promise((resolve, reject) => {
    const installProcess = spawn('webpack', ['--config', filePath], {
      cwd: cwd,
      stdio: 'inherit',
      shell: true,
    });
    //文件目录， 继承父进程的输入输出【即控制台可以看到子进程输出】，开启shell
    installProcess.on('exit', () => {
      console.log('打包完成！');
      resolve();
    });
    installProcess.on('error', (err) => {
      console.log('打包失败！');
      reject(err);
    });
  });
};
runBuild();
