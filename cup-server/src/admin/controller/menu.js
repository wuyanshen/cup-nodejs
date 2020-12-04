const Base = require('./base');
const { makeTree, generateRouters } = require('../util');

module.exports = class extends Base {
  /**
   * @api {get} /menu/retrieve 查询菜单
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName retrieve
   * @apiGroup 菜单管理
   *
   * @apiParam {int}     name    菜单名称【必填】
   * @apiParam {String}  status  菜单状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse menuRetrieveSuccess
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
      const res = await this.model('menu')
        .where(whereObj)
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
   * @api {post} /menu/add 新增菜单
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName add
   * @apiGroup 菜单管理
   *
   * @apiParam {String}  name       菜单名称【必填】
   * @apiParam {String}  path       路由地址【必填】
   * @apiParam {String}  component  组件路径【必填】
   * @apiParam {int}     pid        父菜单id【必填】
   * @apiParam {String}  permission 按钮权限【必填】
   * @apiParam {String}  icon       菜单图标【必填】
   * @apiParam {int}     visible    是否显示 1是 0否【必填】
   * @apiParam {int}     is_cache   是否缓存 1是 0否【必填】
   * @apiParam {int}     is_frame   是否为外链 1是 0否【必填】
   * @apiParam {int}     type       类型：1菜单 2按钮 3目录【必填】
   * @apiParam {String}  status     菜单状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse addSuccess
   * @apiUse RequestError
   */
  async addAction() {
    const name = this.post('name') || '';
    const path = this.post('path') || '';
    const pid = this.post('pid');
    const permission = this.post('permission') || '';
    const component = this.post('component') || null;
    const icon = this.post('icon') || '';
    const visible = this.post('visible');
    const isCache = this.post('is_cache');
    const isFrame = this.post('is_frame');
    const type = this.post('type');
    const status = this.post('status');
    try {
      await this.model('menu')
        .add({
          name: name,
          path: path,
          pid: pid,
          permission: permission,
          component: component,
          icon: icon,
          visible: visible,
          is_cache: isCache,
          is_frame: isFrame,
          type: type,
          status: status
        });
      return this.success('', '新增成功');
    } catch (e) {
      return this.fail('新增失败');
    }
  }

  /**
   * @api {put} /menu/update 修改菜单
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName update
   * @apiGroup 菜单管理
   *
   * @apiParam {int}     id         菜单id【必填】
   * @apiParam {String}  name       菜单名称【必填】
   * @apiParam {String}  path       路由地址【必填】
   * @apiParam {String}  component  组件路径【必填】
   * @apiParam {int}     pid        父菜单id【必填】
   * @apiParam {String}  permission 按钮权限【必填】
   * @apiParam {String}  icon       菜单图标【必填】
   * @apiParam {int}     visible    是否显示 1是 0否【必填】
   * @apiParam {int}     is_cache   是否缓存 1是 0否【必填】
   * @apiParam {int}     is_frame   是否为外链 1是 0否【必填】
   * @apiParam {int}     type       类型：1菜单 2按钮 3目录【必填】
   * @apiParam {String}  status     菜单状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse addSuccess
   * @apiUse RequestError
   */
  async updateAction() {
    const id = this.post('id');
    const name = this.post('name') || '';
    const path = this.post('path') || '';
    const pid = this.post('pid');
    const permission = this.post('permission') || '';
    const component = this.post('component') || null;
    const icon = this.post('icon') || '';
    const visible = this.post('visible');
    const isCache = this.post('is_cache');
    const isFrame = this.post('is_frame');
    const type = this.post('type');
    const status = this.post('status');
    const sortNum = this.post('sort_num');
    try {
      await this.model('menu')
        .where({
          id: id
        })
        .update({
          name: name,
          path: path,
          pid: pid,
          permission: permission,
          component: component,
          icon: icon,
          visible: visible,
          is_cache: isCache,
          is_frame: isFrame,
          type: type,
          sort_num: sortNum,
          status: status
        });
      return this.success('', '修改成功');
    } catch (e) {
      return this.fail('修改失败');
    }
  }

  /**
   * @api {delete} /menu/delete 删除菜单
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName delete
   * @apiGroup 菜单管理
   *
   * @apiParam {int} id 菜单id【必填】
   *
   * @apiUse RequestHeader
   * @apiUse deleteSuccess
   * @apiUse RequestError
   */
  async deleteAction() {
    const id = this.get('id');
    try {
      const res = await this.model('menu').where({pid: id}).select();
      if (res && Array.isArray(res) && res.length > 0) {
        return this.fail('存在子菜单不允许删除');
      }
      await this.model('menu').where({id: id}).delete();
      return this.success('', '删除成功');
    } catch (e) {
      return this.fail('删除失败');
    }
  }

  /**
   * @api {get} /menu/all 查询所有菜单
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName all
   * @apiGroup 菜单管理
   *
   * @apiUse RequestHeader
   * @apiUse menuAllSuccess
   * @apiUse RequestError
   */
  async allAction() {
    try {
      const res = await this.model('menu')
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
   * @api {get} /menu/tree 查询当前用户的菜单
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName tree
   * @apiGroup 菜单管理
   *
   * @apiUse RequestHeader
   * @apiUse menuTreeSuccess
   * @apiUse RequestError
   */
  async treeAction() {
    /**
     *
     select m.* from cup_menu m
     left join cup_role_menu rm on m.id = rm.menu_id
     left join cup_user_role ur on ur.role_id = rm.role_id
     left join cup_user u on u.id = ur.user_id
     where u.id = 1;
     */
    const userId = think.userId;
    const menus = await this.model('menu').alias('m')
      .join({
        role_menu: {
          join: 'left',
          as: 'rm',
          on: ['rm.menu_id', 'm.id']
        },
        user_role: {
          join: 'left',
          as: 'ur',
          on: ['ur.role_id', 'rm.role_id']
        },
        user: {
          join: 'left',
          as: 'u',
          on: ['u.id', 'ur.user_id']
        }
      })
      .field('m.*')
      .where({'u.id': userId, 'm.type': ['!=', 2], 'm.status': '0'})
      .order('m.sort_num ASC')
      .select();

    // 菜单去重
    const res = menus.filter((item, index, array) => {
      const ids = [];
      array.forEach(item => {
        ids.push(item.id);
      });
      const one = ids.indexOf(item.id) === index;
      return one;
    });

    // 生成树形结构
    const tree = makeTree(res, 'id', 'pid', 'children');
    // 生成vue前端路由结构
    const routers = generateRouters(tree);
    return this.success(routers);
  }
};
