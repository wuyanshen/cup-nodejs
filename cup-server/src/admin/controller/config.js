const Base = require('./base.js');

module.exports = class extends Base {
  /**
   * @api {get} /config/retrieve 查询参数设置
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName retrieve
   * @apiGroup 参数设置
   *
   * @apiUse RequestPagingParam
   * @apiParam {String}     name       参数名称【非必填】
   * @apiParam {String}     is_sys     是否系统内置 0:否 1:是【非必填】
   * @apiParam {String}     key        参数键值【非必填】
   * @apiParam {String}     startTime  参数创建时间-开始【非必填】
   * @apiParam {String}     endTime    参数创建时间-结束【非必填】
   * @apiParam {String}     status     参数状态 (0:正常 1:停用)【非必填】
   *
   * @apiUse RequestHeader
   * @apiUse configRetrieveSuccess
   * @apiUse RequestError
   */
  async retrieveAction() {
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const name = this.get('name') || '';
    const key = this.get('key') || '';
    const isSys = this.get('is_sys') || '';
    const status = this.get('status');
    const startTime = this.get('startTime') || '';
    const endTime = this.get('endTime') || '';
    const whereObj = {};
    if (name) {
      whereObj['name'] = ['like', `%${name}%`];
    }
    if (key) {
      whereObj['key'] = key;
    }
    if (isSys) {
      whereObj['is_sys'] = isSys;
    }
    if (status) {
      whereObj['status'] = status;
    }
    if (startTime && endTime) {
      whereObj['create_time'] = ['between', startTime, endTime];
    }
    try {
      const res = await this.model('config').where(whereObj).page(page, size).countSelect();
      return this.success(res, '查询成功');
    } catch (e) {
      return this.fail('查询失败  ' + e);
    }
  }

  /**
   * @api {post} /config/add 新增参数配置
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName add
   * @apiGroup 参数设置
   *
   * @apiParam {String}  name       参数名称【必填】
   * @apiParam {String}  key        参数键名【必填】
   * @apiParam {String}  value      参数键值【必填】
   * @apiParam {String}  is_sys     是否系统内置 0:否 1:是【必填】
   * @apiParam {String}  remark     备注【必填】
   * @apiParam {String}  status     参数状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse addSuccess
   * @apiUse RequestError
   */
  async addAction() {
    const name = this.post('name') || '';
    const key = this.post('key') || '';
    const value = this.post('value') || '';
    const isSys = this.post('is_sys') || '';
    const status = this.post('status');
    const remark = this.post('remark') || '';
    try {
      await this.model('config').add({
        name: name,
        key: key,
        value: value,
        is_sys: isSys,
        status: status,
        remark: remark
      });
      return this.success('', '新增成功');
    } catch (e) {
      return this.fail('新增失败  ' + e);
    }
  }

  /**
   * @api {delete} /config/delete 删除参数
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName delete
   * @apiGroup 参数设置
   *
   * @apiParam {int}     id      参数id【必填】
   * @apiParam {String}  is_sys  是否系统内置 0:否 1:是【必填】
   *
   * @apiUse RequestHeader
   * @apiUse deleteSuccess
   * @apiUse RequestError
   */
  async deleteAction() {
    const id = this.post('id');
    const isSys = this.post('is_sys') || '';
    try {
      if (isSys === '1') {
        return this.fail('系统内置参数不允许删除');
      }
      await this.model('config').where({id: id}).delete();
      return this.success('', '删除成功');
    } catch (e) {
      return this.fail('删除失败  ' + e);
    }
  }

  /**
   * @api {put} /config/update 修改参数配置
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName update
   * @apiGroup 参数设置
   *
   * @apiParam {int}     id         参数id【必填】
   * @apiParam {String}  name       参数名称【必填】
   * @apiParam {String}  key        参数键名【必填】
   * @apiParam {String}  value      参数键值【必填】
   * @apiParam {String}  is_sys     是否系统内置 0:否 1:是【必填】
   * @apiParam {String}  remark     备注【必填】
   * @apiParam {String}  status     参数状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse updateSuccess
   * @apiUse RequestError
   */
  async updateAction() {
    const id = this.post('id');
    const name = this.post('name') || '';
    const key = this.post('key') || '';
    const value = this.post('value') || '';
    const isSys = this.post('is_sys') || '';
    const status = this.post('status');
    const remark = this.post('remark') || '';
    try {
      await this.model('config').update({
        id: id,
        name: name,
        key: key,
        value: value,
        is_sys: isSys,
        status: status,
        remark: remark
      });
      return this.success('', '修改成功');
    } catch (e) {
      return this.fail('修改失败  ' + e);
    }
  }

  /**
   * @api {get} /config/info 获取参数配置详情
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen -> 全局获取配置
   * @apiName info
   * @apiGroup 参数设置
   *
   * @apiUse RequestPagingParam
   * @apiParam {String}     key        参数键值【非必填】
   *
   * @apiUse RequestHeader
   * @apiUse configInfoSuccess
   * @apiUse RequestError
   */
  async infoAction() {
    const key = this.get('key') || '';
    try {
      const res = await this.model('config').where({key: key}).find();
      return this.success(res, '查询成功');
    } catch (e) {
      return this.fail('查询失败  ' + e);
    }
  }
};
