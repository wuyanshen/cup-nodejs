/**
 * 日志中间件
 */
module.exports = (options, app) => {
  return (ctx, next) => {
    const method = ctx.method;
    if (method === 'GET') {
      return next();
    }

    // 获取方法执行后的请求相关数据
    return next().catch(e => {
    }).then(async() => {
      const controller = ctx.controller;
      const action = ctx.action;
      const url = ctx.url;
      const params = ctx.request.body.post;
      const response = ctx.response.body;

      const errorNo = response.errno;
      let errorMsg;
      let status = '0';
      if (errorNo !== 0) {
        errorMsg = JSON.stringify(response.errmsg);
        status = '1';
      }
      // 获取ip和地址
      const addrInfo = await think.service('ip', 'admin').getAddress();
      // 组装日志对象
      const logData = {
        module: controller,
        url: url,
        method: method,
        method_name: action,
        params: JSON.stringify(params),
        response: JSON.stringify(response),
        oper_name: think.username,
        oper_ip: addrInfo.ip,
        oper_location: addrInfo.addr.split(' ')[0],
        status: status,
        error_msg: errorMsg,
        error_no: errorNo
      };
      // 新增日志对象
      await think.service('log', 'admin').add(logData);
    });
  };
};
