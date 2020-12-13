/**
 * 权限中间件
 */
module.exports = (options, app) => {
  return async(ctx, next) => {
    think.logger.info('=== 权限中间件执行 开始 ' + think.datetime() + ' ===');

    if (ctx.method === 'WEBSOCKET') {
      return next();
    }

    /* if (ctx.method !== 'GET' && ctx.controller !== 'auth') {
      return ctx.fail(2000, '演示环境，不允许操作');
    } */

    // 判断用户是否已登录
    if (ctx.controller !== 'auth') {
      // 从请求头获取token
      const token = ctx.header['x-cup-token'];
      if (!token) {
        return ctx.fail(401, '请先进行登录');
      }

      // 解析token
      const tokenService = think.service('token', 'admin');
      // 校验token
      const result = tokenService.verify(token);
      if (!result) {
        return ctx.fail(401, '登录超时，请重新登录');
      }

      const res = tokenService.parse(token);

      // 获取userId
      const userId = res.id;
      userId && (think.userId = userId);

      // 获取用戶名
      const username = res.username;
      username && (think.username = username);
    }

    // 如果为非公开，非登录的action，则验证用户是否有访问接口的权限
    const publicAction = ctx.config('publicAction');
    const publicController = ctx.config('publicController');
    const controllerAction = ctx.controller + '/' + ctx.action;
    if (ctx.controller !== 'auth' && !publicAction.includes(controllerAction) && !publicController.includes(ctx.controller)) {
      const urls = await think.service('auth', 'admin').getPermissions(think.userId);
      const url = '/' + ctx.controller + '/' + ctx.action;
      if (urls.length === 0 || urls.indexOf(url) < 0) {
        think.logger.info('无权访问 ' + url + ' 接口');
        think.logger.info('=== 权限中间件执行 结束 ' + think.datetime() + ' ===');
        return ctx.fail(403, '您无权访问该接口，请联系管理员');
        // return next();
      }
    }
    think.logger.info('=== 权限中间件执行 结束 ' + think.datetime() + ' ===');
    return next();
  };
};
