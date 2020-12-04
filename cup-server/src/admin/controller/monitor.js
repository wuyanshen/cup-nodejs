const Base = require('./base');
const {sysInfo, cpuInfo, diskInfo, memInfo} = require('../util/os');
const moment = require('moment');

module.exports = class extends Base {
  /**
   * @api {get} /monitor/sysInfo 查询系统信息
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName sysInfo
   * @apiGroup 系统监控
   *
   * @apiUse RequestHeader
   * @apiUse monitorSysInfoSuccess
   * @apiUse RequestError
   */
  async sysInfoAction() {
    const cpuIf = await cpuInfo();
    const diskIf = await diskInfo();
    const sysIf = await sysInfo();
    const memIf = await memInfo();
    const data = {
      sys: {
        os: sysIf.platform,
        day: sysIf.uptime,
        ip: sysIf.ip,
        pUpTime: sysIf.pUpTime,
        name: sysIf.hostname,
        arch: sysIf.arch
      },
      cpu: {
        name: cpuIf.cpuName,
        idle: cpuIf.cpuFree,
        used: cpuIf.cpuUsage,
        coreNumber: cpuIf.cpuNum
      },
      memory: {
        total: memIf.totalmem,
        available: memIf.freemem,
        used: memIf.usedMem,
        usageRate: memIf.memUsage
      },
      swap: {
        used: memIf.swapUsed,
        available: memIf.swapFree,
        total: memIf.swapTotal,
        usageRate: memIf.swapUsage
      },
      disk: {
        total: diskIf.total,
        available: diskIf.available,
        used: diskIf.used,
        usageRate: diskIf.usageRate
      },
      time: moment().format('HH:mm:ss')
    };

    return this.success(data);
  }
};
