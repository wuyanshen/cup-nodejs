const Base = require('./base');
const { makeTree } = require('../util');

module.exports = class extends Base {
  /**
   * @api {get} /org/retrieve 查询部门(分页)
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName retrieve
   * @apiGroup 部门管理
   *
   * @apiParam {int} name 部门名称【必填】
   * @apiParam {String} status 部门状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse orgRetrieveSuccess
   * @apiUse RequestError
   */
  async retrieveAction() {
    const name = this.get('name') || '';
    const status = this.get('status');

    const whereObj = {};
    if (name) {
      whereObj['name'] = ['like', `%${name}%`];
    }
    if (status) {
      whereObj['status'] = status;
    }
    try {
      const res = await this.model('org').where(whereObj).order('sort_num ASC').select();
      // 生成树形结构
      const tree = makeTree(res, 'id', 'pid', 'children');
      return this.success(tree, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }

  /**
   * @api {get} /org/tree 查询部门(无数据权限)
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen ->（角色管理-数据权限）
   * @apiName tree
   * @apiGroup 部门管理
   *
   * @apiUse RequestHeader
   * @apiUse orgTreeSuccess
   * @apiUse RequestError
   */
  async treeAction() {
    try {
      const res = await this.model('org')
        .where({status: '0'})
        .order('sort_num ASC')
        .select();
      // 生成树形结构
      const tree = makeTree(res, 'id', 'pid', 'children');
      return this.success(tree, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }

  /**
   * @api {get} /org/treeScope 查询部门(数据权限)
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen (带数据权限过滤)
   * @apiName treeScope
   * @apiGroup 部门管理
   *
   * @apiUse RequestHeader
   * @apiUse orgTreeScopeSuccess
   * @apiUse RequestError
   */
  async treeScopeAction() {
    try {
      const dataScopeSql = await think.service('auth', 'admin').dataScopeHandler();
      const res = await this.model('org').alias('o')
        .where({status: '0'})
        .where(dataScopeSql)
        .order('sort_num ASC')
        .select();
      // 生成树形结构
      const tree = makeTree(res, 'id', 'pid', 'children');
      return this.success(tree, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }

  /**
   * @api {post} /org/add 新增部门
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName add
   * @apiGroup 部门管理
   *
   * @apiParam {String}  name 部门名称【必填】
   * @apiParam {int}     pid 父级部门id【必填】
   * @apiParam {String}  address 地址【必填】
   * @apiParam {String}  phone 电话【必填】
   * @apiParam {int}     sortNum 排序【必填】
   * @apiParam {int}     status 部门状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse updateSuccess
   * @apiUse RequestError
   */
  async addAction() {
    const name = this.post('name') || '';
    const pid = this.post('pid');
    const address = this.post('address') || '';
    const phone = this.post('phone') || '';
    const sortNum = this.post('sortNum');
    const status = this.post('status');
    try {
      await this.model('org').add({
        name: name,
        pid: pid,
        address: address,
        phone: phone,
        sort_num: sortNum,
        status: status
      });
      return this.success('', '新增成功');
    } catch (e) {
      return this.fail('新增失败');
    }
  }

  /**
   * @api {put} /org/update 修改部门
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName update
   * @apiGroup 部门管理
   *
   * @apiParam {int}     id 角色id【必填】
   * @apiParam {String}  name 部门名称【必填】
   * @apiParam {int}     pid 父级部门id【必填】
   * @apiParam {String}  address 地址【必填】
   * @apiParam {String}  phone 电话【必填】
   * @apiParam {int}     sort_num 排序【必填】
   * @apiParam {int}     status 部门状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse updateSuccess
   * @apiUse RequestError
   */
  async updateAction() {
    const id = this.post('id') || '';
    const name = this.post('name') || '';
    const pid = this.post('pid') || '';
    const address = this.post('address') || '';
    const phone = this.post('phone') || '';
    const sortNum = this.post('sort_num') || '';
    const status = this.post('status') || '';
    try {
      await this.model('org')
        .where({id: id})
        .update({
          name: name,
          pid: pid,
          address: address,
          phone: phone,
          sort_num: sortNum,
          status: status
        });
      return this.success('', '修改成功');
    } catch (e) {
      return this.fail('修改失败');
    }
  }

  /**
   * @api {delete} /org/delete 删除部门
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName delete
   * @apiGroup 部门管理
   *
   * @apiParam {int} id 部门id【必填】
   *
   * @apiUse RequestHeader
   * @apiUse deleteSuccess
   * @apiUse RequestError
   */
  async deleteAction() {
    const id = this.get('id');
    try {
      const res = await this.model('org').where({pid: id}).select();
      if (res && Array.isArray(res) && res.length > 0) {
        return this.fail('存在子部门不允许删除');
      }
      await this.model('org')
        .where({id: id})
        .delete();
      return this.success('', '删除成功');
    } catch (e) {
      return this.fail('删除失败');
    }
  }
};
