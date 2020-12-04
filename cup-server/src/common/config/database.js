const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'cupserver',
  prefix: 'cup_',
  charset: 'utf8mb4',
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root',
  dateStrings: true,
  connectionLimit: 1, // 连接池的连接个数，默认为 1
  acquireWaitTimeout: 0 // 等待连接的超时时间，避免获取不到连接一直卡在那里，开发环境下有用
};
