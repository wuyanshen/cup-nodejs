module.exports = class extends think.Service {
  /**
     * 查询当前用户的权限
     */
  async getPermissions(userId) {
    // 查询当前用户的所有菜单集合，包括按钮url
    const menus = await think.model('menu').alias('m')
      .join({
        role_menu: {
          join: 'left',
          as: 'rm',
          on: ['id', 'menu_id']
        },
        role: {
          join: 'left',
          as: 'r',
          on: ['r.id', 'rm.role_id']
        },
        user_role: {
          join: 'left',
          as: 'ur',
          on: ['ur.role_id', 'r.id']
        }
      })
      .field('m.*')
      .where({'ur.user_id': userId, 'm.status': 0, 'm.type': 2})
      .order({'m.sort_num': 'ASC'})
      .select();

    think.logger.info('开始授权。。。');
    const urls = menus.filter(item => item.type === 2 && item.permission != null && item.permission !== '')
      .map(item => {
        return item.permission;
      });
    think.logger.info('用户所有接口url', urls);
    think.logger.info('授权结束。。。');

    return urls;
  }

  /**
     *  数据权限处理器
     */
  async dataScopeHandler(userAlias, orgAlias) {
    orgAlias = orgAlias || 'o';

    // 获取当前用户的部门id
    const orgId = await this.model('user').where({id: think.userId}).getField('org_id');

    // 获取当前用户所在部门的子部门的id
    const orgPids = await this.model('org').where({pid: orgId[0]}).getField('id');

    // 当前部门及子部门id
    const tmp = [...orgId, ...orgPids];
    const orgAndPorgIds = tmp.toString();

    /**
     * select r.* from role r
     * left join cup_user_role ur on ur.role_id = r.id,
     * left join cup_user u on u.id = ur.user_id
     * where u.id = ?
     */
    const roles = await think.model('role').alias('r')
      .join({
        user_role: {
          join: 'left',
          on: ['ur.role_id', 'r.id'],
          as: 'ur'
        },
        user: {
          join: 'left',
          on: ['u.id', 'ur.user_id'],
          as: 'u'
        }
      })
      .where({'u.id': think.userId})
      .field('r.*')
      .select();

    // 取最小的数据权限
    const dsTypes = roles.map(item => item.ds_type);
    const dsType = Math.min.apply(null, dsTypes);

    // 获取按明细设置机构id，用逗号分隔
    let dsScopes = '';
    for (const role of roles) {
      if (!role.ds_scope) {
        continue;
      }
      dsScopes += role.ds_scope + ',';
    }
    if (dsScopes.length > 0) {
      dsScopes = dsScopes.substr(0, dsScopes.length - 1);
    }

    let sqlWhere = '';

    switch (dsType) {
      // 1.全部数据
      case think.enumSchema.enumRoleDataScope.ALL:
        break;
        // 2.按明细设置
      case think.enumSchema.enumRoleDataScope.Custom:
        sqlWhere += `${orgAlias}.id in (${dsScopes})`;
        break;
        // 3.所在公司（部门）及以下数据
      case think.enumSchema.enumRoleDataScope.DepartmentBelow:
        sqlWhere += `${orgAlias}.id in (${orgAndPorgIds})`;
        break;
        // 4.所在公司（部门）数据
      case think.enumSchema.enumRoleDataScope.Department:
        sqlWhere += `${orgAlias}.id = ${orgId[0]}`;
        break;
        // 5.仅本人数据
      case think.enumSchema.enumRoleDataScope.Self:
        if (userAlias) {
          sqlWhere += `${userAlias}.id = ${think.userId}`;
        } else {
          sqlWhere += `1=0`;
        }
        break;
    }

    return sqlWhere;
  }
};
