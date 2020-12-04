const Base = require('./base');

module.exports = class extends Base {
  /**
   * @api {get} /role/retrieve 查询角色(分页)
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName retrieve
   * @apiGroup 角色管理
   *
   * @apiUse RequestPagingParam
   * @apiParam {String}  name 角色名称【非必填】
   * @apiParam {String}  code 角色编码【非必填】
   * @apiParam {int}     status 角色状态 (0:正常 1:停用)【非必填】
   *
   * @apiUse RequestHeader
   * @apiUse roleRetrieveSuccess
   * @apiUse RequestError
   */
  async retrieveAction() {
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const name = this.get('name') || '';
    const code = this.get('code') || '';
    const status = this.get('status');
    const whereObj = {};
    if (name) {
      whereObj['name'] = ['like', `%${name}%`];
    }
    if (code) {
      whereObj['code'] = code;
    }
    if (status) {
      whereObj['status'] = status;
    }
    try {
      const res = await this.model('role').where(whereObj).page(page, size).countSelect();
      return this.success(res, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }

  /**
   * @api {post} /role/add 新增角色
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName add
   * @apiGroup 角色管理
   *
   * @apiParam {String}  name 角色名称【必填】
   * @apiParam {String}  code 角色编码【必填】
   * @apiParam {String}  remark 备注【必填】
   * @apiParam {int}     ds_type 数据权限：1全部数据  2按明细设置  3所在公司（部门）及以下数据 4所在公司（部门）数据 5仅本人数据 【必填】
   * @apiParam {String}  ds_scope 数据范围(数据权限是2按明细设置时有值)【必填】
   * @apiParam {int}     status 角色状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse addSuccess
   * @apiUse RequestError
   */
  async addAction() {
    const name = this.post('name') || '';
    const code = this.post('code') || '';
    const remark = this.post('remark') || '';
    const status = this.post('status') || '';
    const dsType = this.post('ds_type') || '';
    const dsScope = this.post('ds_scope') || '';

    try {
      await this.model('role')
        .add({
          name: name,
          code: code,
          remark: remark,
          status: status,
          ds_type: dsType,
          ds_scope: dsScope
        });
      return this.success('', '新增成功');
    } catch (e) {
      return this.fail('新增失败');
    }
  }

  /**
   * @api {put} /role/update 修改角色
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName update
   * @apiGroup 角色管理
   *
   * @apiParam {int}     id 角色id【必填】
   * @apiParam {String}  name 角色名称【必填】
   * @apiParam {String}  code 角色编码【必填】
   * @apiParam {int}     ds_type 数据权限：1全部数据  2按明细设置  3所在公司（部门）及以下数据 4所在公司（部门）数据 5仅本人数据 【必填】
   * @apiParam {String}  ds_scope 数据范围(数据权限是2按明细设置时有值)【必填】
   * @apiParam {int}     status 角色状态 (0:正常 1:停用)【必填】
   * @apiParam {String}  remark 备注【必填】
   *
   * @apiUse RequestHeader
   * @apiUse updateSuccess
   * @apiUse RequestError
   */
  async updateAction() {
    const id = this.post('id') || '';
    const name = this.post('name') || '';
    const code = this.post('code') || '';
    const remark = this.post('remark') || '';
    const status = this.post('status') || '';
    const dsType = this.post('ds_type') || '';
    const dsScope = this.post('ds_scope') || '';

    try {
      await this.model('role')
        .where({id: id})
        .update({
          name: name,
          code: code,
          remark: remark,
          status: status,
          ds_type: dsType,
          ds_scope: dsScope
        });
      return this.success('', '修改成功');
    } catch (e) {
      return this.fail('修改失败');
    }
  }

  /**
   * @api {delete} /role/delete 删除角色
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName delete
   * @apiGroup 角色管理
   *
   * @apiParam {int} id 角色id【必填】
   *
   * @apiUse RequestHeader
   * @apiUse deleteSuccess
   * @apiUse RequestError
   */
  async deleteAction() {
    const id = this.get('id') || '';
    try {
      await this.model('role')
        .where({id: id})
        .delete();
      return this.success('', '删除成功');
    } catch (e) {
      return this.fail('删除失败');
    }
  }

  /**
   * @api {get} /role/roleToMenuIds 角色id对应菜单id集合
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName roleToMenuIds
   * @apiGroup 角色管理
   *
   * @apiParam {int} id 角色id【必填】
   *
   * @apiUse RequestHeader
   * @apiUse roleToMenuIdsSuccess
   * @apiUse RequestError
   */
  async roleToMenuIdsAction() {
    const id = this.get('id') || '';
    try {
      const res = await this.model('role_menu')
        .where({role_id: id})
        .select();
      const menuIds = res.map(item => {
        return item.menu_id;
      });
      return this.success(menuIds, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }

  /**
   * @api {put} /role/authorization 给角色授权
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName authorization
   * @apiGroup 角色管理
   *
   * @apiParam {int} id 角色id【必填】
   * @apiParam {int[]} menuIds 角色id集合【必填】
   *
   * @apiUse RequestHeader
   * @apiUse RequestSuccess
   * @apiUse RequestError
   */
  async authorizationAction() {
    const id = this.post('id') || '';
    const menuIds = this.post('menuIds') || [];

    try {
      if (Array.isArray(menuIds)) {
        const roleMenuModel = this.model('role_menu');
        await roleMenuModel.transaction(async() => {
          // 删除role_menu
          await roleMenuModel.where({role_id: id}).delete();

          if (menuIds.length > 0) {
            // 新增role_menu
            const data = menuIds.map(menuId => {
              return {
                menu_id: menuId,
                role_id: id
              };
            });
            await this.model('role_menu').db(roleMenuModel.db())
              .addMany(data);
          }
        });
      }
      return this.success('', '授权成功');
    } catch (e) {
      return this.fail('授权失败');
    }
  }

  /**
   * @api {put} /role/all 查询所有角色list
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName all
   * @apiGroup 角色管理
   *
   * @apiUse RequestHeader
   * @apiUse roleAllSuccess
   * @apiUse RequestError
   */
  async allAction() {
    try {
      const res = await this.model('role').select();
      return this.success(res, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }
};
