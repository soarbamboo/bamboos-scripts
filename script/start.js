#! /usr/bin/env node
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on('unhandledRejection', (err) => {
  throw err;
});
const path = require('path');
const hostPath = path.resolve(__dirname, '../');
const filePath = path.resolve(hostPath, './webpack/server.js');
const spawn = require('child_process').spawn;
const cwd = process.cwd();
const runBuild = async () => {
  await new Promise((resolve, reject) =>
    spawn('node', [filePath], {
      cwd: cwd,
      stdio: 'inherit',
      shell: true,
    })
  );
};
runBuild();
