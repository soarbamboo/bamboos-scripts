#! /usr/bin/env node

// cross-spawn 在任意操作系统下安全地启动子进程并执行命令
const spawn = require('cross-spawn');
// 获取参数  如 start build等
const args = process.argv.slice(2);

const scriptIndex = args.findIndex(
  (x) => x === 'build' || x === 'eject' || x === 'start' || x === 'test'
);
const path = require('path');
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];
const hostPath = path.resolve(__dirname, '../');
const filePath = path.resolve(hostPath, './script/');
if (['build', 'eject', 'start', 'test'].includes(script)) {
  const result = spawn.sync(
    process.execPath,
    nodeArgs
      .concat(require.resolve(filePath + '/' + script + '.js'))
      .concat(args.slice(scriptIndex + 1)),
    { stdio: 'inherit' }
  );
  if (result.signal) {
    if (result.signal === 'SIGKILL') {
      console.log(
        'The build failed because the process exited too early. ' +
          'This probably means the system ran out of memory or someone called ' +
          '`kill -9` on the process.'
      );
    } else if (result.signal === 'SIGTERM') {
      console.log(
        'The build failed because the process exited too early. ' +
          'Someone might have called `kill` or `killall`, or the system could ' +
          'be shutting down.'
      );
    }
    process.exit(1);
  }
  process.exit(result.status);
} else {
  console.log('Unknown script "' + script + '".');
  console.log('Perhaps you need to update bamboos-scripts?');
}
