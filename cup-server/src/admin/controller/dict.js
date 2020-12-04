const Base = require('./base.js');

module.exports = class extends Base {
  /**
   * @api {get} /dict/retrieve 查询字典
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName retrieve
   * @apiGroup 字典管理
   *
   * @apiUse RequestPagingParam
   * @apiParam {String}     name       字典名称【非必填】
   * @apiParam {String}     type       字典类型【非必填】
   * @apiParam {String}     startTime  字典创建时间-开始【非必填】
   * @apiParam {String}     endTime    字典创建时间-结束【非必填】
   * @apiParam {String}     status     字典状态 (0:正常 1:停用)【非必填】
   *
   * @apiUse RequestHeader
   * @apiUse dictRetrieveSuccess
   * @apiUse RequestError
   */
  async retrieveAction() {
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const name = this.get('name') || '';
    const type = this.get('type') || '';
    const status = this.get('status');
    const startTime = this.get('startTime') || '';
    const endTime = this.get('endTime') || '';
    const whereObj = {};
    if (name) {
      whereObj['name'] = ['like', `%${name}%`];
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
      const res = await this.model('dict').where(whereObj).page(page, size).countSelect();
      return this.success(res, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }

  /**
   * @api {post} /dict/add 新增字典
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName add
   * @apiGroup 字典管理
   *
   * @apiParam {String}  name      字典名称【必填】
   * @apiParam {String}  type      字典类型【必填】
   * @apiParam {String}  remark    备注【必填】
   * @apiParam {String}  status    字典状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse addSuccess
   * @apiUse RequestError
   */
  async addAction() {
    const name = this.post('name') || '';
    const type = this.post('type') || '';
    const status = this.post('status');
    const remark = this.post('remark') || '';
    try {
      await this.model('dict').add({
        name: name,
        type: type,
        status: status,
        remark: remark
      });
      return this.success('', '新增成功');
    } catch (e) {
      return this.fail('新增失败');
    }
  }

  /**
   * @api {delete} /dict/delete 删除字典
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName delete
   * @apiGroup 字典管理
   *
   * @apiParam {int}     id    字典id【必填】
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
      const res = await this.model('dict_item').where({type: type}).find();
      if (!think.isEmpty(res)) {
        return this.fail('该字典已分配字典项目不允许删除');
      }
      await this.model('dict').where({id: id}).delete();
      return this.success('', '删除成功');
    } catch (e) {
      return this.fail('删除失败');
    }
  }

  /**
   * @api {put} /dict/update 修改字典
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName update
   * @apiGroup 字典管理
   *
   * @apiParam {int}     id        字典id【必填】
   * @apiParam {String}  name      字典名称【必填】
   * @apiParam {String}  type      字典类型【必填】
   * @apiParam {String}  remark    备注【必填】
   * @apiParam {String}  status    字典状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse updateSuccess
   * @apiUse RequestError
   */
  async updateAction() {
    const id = this.post('id');
    const name = this.post('name') || '';
    const type = this.post('type') || '';
    const status = this.post('status');
    const remark = this.post('remark') || '';
    try {
      await this.model('dict').update({
        id: id,
        name: name,
        type: type,
        status: status,
        remark: remark
      });
      return this.success('', '修改成功');
    } catch (e) {
      return this.fail('修改失败');
    }
  }

  /**
   * @api {get} /dict/checkDictType 检查字典类型是否已存在
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName checkDictType
   * @apiGroup 字典管理
   *
   * @apiUse RequestPagingParam
   * @apiParam {String}     type       字典类型【非必填】
   *
   * @apiUse RequestHeader
   * @apiUse dictCheckDictTypeSuccess
   * @apiUse RequestError
   */
  async checkDictTypeAction() {
    const type = this.get('type') || '';
    try {
      const res = await this.model('dict').where({type: type}).find();
      if (think.isEmpty(res)) {
        return this.success(0, '字典类型可用');
      } else {
        return this.success(1, '字典类型已存在');
      }
    } catch (e) {
      return this.fail('检查失败');
    }
  }

  /**
   * @api {get} /dict/list 查询字典列表
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen -> 字典项页面下拉框
   * @apiName list
   * @apiGroup 字典管理
   *
   * @apiUse RequestHeader
   * @apiUse dictListSuccess
   * @apiUse RequestError
   */
  async listAction() {
    try {
      const res = await this.model('dict').where().select();
      return this.success(res, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }

  /**
   * @api {get} /dict/info 查询字典详情
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen -> 回显字典项下拉框
   * @apiName info
   * @apiGroup 字典管理
   *
   * @apiUse RequestPagingParam
   * @apiParam {int}     id       字典id【必填】
   *
   * @apiUse RequestHeader
   * @apiUse dictInfoSuccess
   * @apiUse RequestError
   */
  async infoAction() {
    const id = this.get('id');
    try {
      const res = await this.model('dict').where({id: id}).find();
      return this.success(res, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }
};
