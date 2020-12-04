const Base = require('./base.js');

module.exports = class extends Base {
  /**
   * @api {get} /dictItem/retrieve 查询字典项
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName retrieve
   * @apiGroup 字典项管理
   *
   * @apiUse RequestPagingParam
   * @apiParam {String}     label      字典标签【非必填】
   * @apiParam {String}     type       字典类型【非必填】
   * @apiParam {String}     startTime  字典项创建时间-开始【非必填】
   * @apiParam {String}     endTime    字典项创建时间-结束【非必填】
   * @apiParam {String}     status     字典状态 (0:正常 1:停用)【非必填】
   *
   * @apiUse RequestHeader
   * @apiUse dictItemRetrieveSuccess
   * @apiUse RequestError
   */
  async retrieveAction() {
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const label = this.get('label') || '';
    const type = this.get('type') || '';
    const status = this.get('status');
    const startTime = this.get('startTime') || '';
    const endTime = this.get('endTime') || '';
    const whereObj = {};

    if (label) {
      whereObj['label'] = ['like', `%${label}%`];
    }
    if (type) {
      whereObj['type'] = type;
    }
    if (status) {
      whereObj['status'] = status;
    }
    if (startTime && endTime) {
      whereObj['create_time'] = ['between', startTime, endTime];
    }
    try {
      const res = await this.model('dict_item').where(whereObj).page(page, size).countSelect();
      return this.success(res, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }

  /**
   * @api {post} /dictItem/add 新增字典项
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName add
   * @apiGroup 字典项管理
   *
   * @apiParam {String}  label     字典标签【必填】
   * @apiParam {String}  type      字典类型【必填】
   * @apiParam {String}  value     字典键值【必填】
   * @apiParam {String}  remark    备注【必填】
   * @apiParam {String}  status    字典状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse addSuccess
   * @apiUse RequestError
   */
  async addAction() {
    const label = this.post('label') || '';
    const type = this.post('type') || '';
    const value = this.post('value') || '';
    const status = this.post('status');
    const remark = this.post('remark') || '';
    try {
      // 清除缓存
      await think.cache(type, null);
      await this.model('dict_item').add({
        label: label,
        type: type,
        value: value,
        status: status,
        remark: remark
      });
      return this.success('', '新增成功');
    } catch (e) {
      return this.fail('新增失败');
    }
  }

  /**
   * @api {delete} /dictItem/delete 删除字典项
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName delete
   * @apiGroup 字典项管理
   *
   * @apiParam {int}     id    菜单id【必填】
   * @apiParam {String}  type  字典类型【必填】
   *
   * @apiUse RequestHeader
   * @apiUse deleteSuccess
   * @apiUse RequestError
   */
  async deleteAction() {
    const id = this.post('id');
    const type = this.post('type');
    try {
      // 清除缓存
      await think.cache(type, null);
      await this.model('dict_item').where({id: id}).delete();
      return this.success('', '删除成功');
    } catch (e) {
      return this.fail('删除失败');
    }
  }

  /**
   * @api {put} /dictItem/update 修改字典项
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName update
   * @apiGroup 字典项管理
   *
   * @apiParam {int}     id        字典id【必填】
   * @apiParam {String}  label     字典标签【必填】
   * @apiParam {String}  type      字典类型【必填】
   * @apiParam {String}  value     字典键值【必填】
   * @apiParam {String}  remark    备注【必填】
   * @apiParam {String}  status    字典状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse updateSuccess
   * @apiUse RequestError
   */
  async updateAction() {
    const id = this.post('id');
    const dictId = this.post('dictId');
    const label = this.post('label') || '';
    const type = this.post('type') || '';
    const value = this.post('value') || '';
    const status = this.post('status');
    const remark = this.post('remark') || '';
    try {
      // 清除缓存
      await think.cache(type, null);
      await this.model('dict_item').update({
        id: id,
        dict_id: dictId,
        label: label,
        type: type,
        value: value,
        status: status,
        remark: remark
      });
      return this.success('', '修改成功');
    } catch (e) {
      return this.fail('修改失败');
    }
  }

  /**
   * @api {get} /dictItem/list 字典项列表
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen -> 全局查询字典
   * @apiName list
   * @apiGroup 字典项管理
   *
   * @apiUse RequestPagingParam
   * @apiParam {String}     type       字典类型【必填】
   *
   * @apiUse RequestHeader
   * @apiUse dictListSuccess
   * @apiUse RequestError
   */
  async listAction() {
    const type = this.get('type');
    try {
      // 如果缓存存在，直接读取缓存
      // 如果缓存不存在，则执行 value 函数，然后将返回值设置到缓存中并返回。
      // 如果 value 函数里有异步操作，需要返回 Promise
      // 参见thinkjs https://thinkjs.org/zh-cn/doc/3.0/cache.html
      const res = await this.cache(type, () => {
        return this.model('dict_item').where({type: type, status: '0'}).select();
      });
      return this.success(res, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }
};
