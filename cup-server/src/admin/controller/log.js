const Base = require('./base.js');

module.exports = class extends Base {
  /**
   * @api {get} /log/retrieve 查询日志
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName retrieve
   * @apiGroup 日志管理
   *
   * @apiUse RequestPagingParam
   * @apiParam {int}     module  系统模块【必填】
   * @apiParam {String}  status  日志状态 (0:正常 1:异常)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse logRetrieveSuccess
   * @apiUse RequestError
   */
  async retrieveAction() {
    try {
      const page = this.get('page') || 1;
      const size = this.get('size') || 10;
      const module = this.get('module') || '';
      const status = this.get('status');
      const whereObj = {};
      if (module) {
        whereObj['module'] = module;
      }
      if (status) {
        whereObj['status'] = status;
      }
      const res = await this.model('log').where(whereObj).page(page, size).order('oper_time DESC').countSelect();
      return this.success(res, '查询成功');
    } catch (e) {
      return this.fail('查询失败  ' + e);
    }
  }

  /**
   * @api {delete} /log/clear 清空日志
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName clear
   * @apiGroup 日志管理
   *
   * @apiUse RequestHeader
   * @apiUse deleteSuccess
   * @apiUse RequestError
   */
  async clearAction() {
    try {
      await this.model('log').delete();
      return this.success('', '清空成功');
    } catch (e) {
      return this.fail('清空成功');
    }
  }
};
