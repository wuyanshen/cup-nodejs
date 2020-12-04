const path = require('path');
const isDev = think.env === 'development';
const authorization = require('../../middleware/authorization');
const log = require('../../middleware/log');

module.exports = [
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource',
    enable: isDev,
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload',
    options: {
      keepExtensions: true,
      limit: '5mb'
    }
  },
  {
    handle: 'router',
    options: {}
  },
  {
    handle: authorization, // 权限中间件
    match: ctx => {
      if (ctx.module === 'admin') {
        return true;
      }
    },
    options: {}
  },
  {
    handle: log, // 日志中间件
    match: ctx => {
      if (ctx.module === 'admin') {
        return true;
      }
    },
    options: {}
  },
  'logic',
  'controller'
];
