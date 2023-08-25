const path = require('path');
const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;
const SERVER_HOST = 'localhost';
const SERVER_PORT = process.env.PORT ? process.env.PORT : 9090;
const shouldShowAnaly = false;
const commonConfig = require('./webpack.common.js');
const customerConfig = () => {
  if (process.env.CONFIG_PATH) {
    const customerCongifPath = path.resolve(
      process.cwd(),
      process.env.CONFIG_PATH
    );
    return require(customerCongifPath);
  } else {
    return commonConfig;
  }
};

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  SERVER_HOST,
  SERVER_PORT,
  shouldShowAnaly,
  commonConfig,
  customerConfig: customerConfig(),
};
