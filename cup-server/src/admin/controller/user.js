const Base = require('./base');

module.exports = class extends Base {
  /**
   * @api {get} /user/info 当前登录用户信息
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName info
   * @apiGroup 用户管理
   * @apiUse RequestHeader
   * @apiUse userInfoSuccess
   * @apiUse RequestError
   */
  async infoAction() {
    const userInfo = await this.model('user').where({id: think.userId}).find();
    return this.success(userInfo);
  }

  /**
   * @api {get} /user/retrieve 查询用户(分页)
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName retrieve
   * @apiGroup 用户管理
   *
   * @apiUse RequestPagingParam
   * @apiParam {String} username 用户名【非必填】
   * @apiParam {String} nickname 昵称【非必填】
   * @apiParam {String} phone 手机号【非必填】
   * @apiParam {String} startTime 创建时间-开始【非必填】
   * @apiParam {String} endTime 创建时间-结束【非必填】
   * @apiParam {int} org_id 部门id【非必填】
   * @apiParam {int} status 用户状态 (0:正常 1:停用)【非必填】
   *
   * @apiUse RequestHeader
   * @apiUse userRetrieveSuccess
   * @apiUse RequestError
   */
  async retrieveAction() {
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const username = this.get('username') || '';
    const nickname = this.get('nickname') || '';
    const phone = this.get('phone') || '';
    const startTime = this.get('startTime') || '';
    const endTime = this.get('endTime') || '';
    const orgId = this.get('org_id');
    const status = this.get('status');
    const whereObj = {};
    if (orgId) {
      whereObj['u.org_id'] = orgId;
    }
    if (status) {
      whereObj['u.status'] = status;
    }
    if (username) {
      whereObj['u.username'] = ['like', `%${username}%`];
    }
    if (nickname) {
      whereObj['u.nickname'] = ['like', `%${nickname}%`];
    }
    if (phone) {
      whereObj['u.phone'] = phone;
    }
    if (startTime && endTime) {
      whereObj['u.create_time'] = ['between', startTime, endTime];
    }
    try {
      const dataScope = await think.service('auth', 'admin').dataScopeHandler('u');
      const users = await this.model('user')
        .where(whereObj)
      // ====== 数据权限 start =======
        .alias('u')
        .join({
          org: {
            join: 'left',
            on: ['u.org_id', 'o.id'],
            as: 'o'
          }
        })
        .where(dataScope)
        .field('u.*')
      // ====== 数据权限 end =======
        .page(page, size)
        .countSelect();
      return this.success(users, '查询成功');
    } catch (e) {
      return this.fail('查询失败');
    }
  }

  /**
   * @api {post} /user/add 新增用户
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName add
   * @apiGroup 用户管理
   *
   * @apiParam {String} username 用户名【必填】
   * @apiParam {String} password 密码【必填】
   * @apiParam {String} nickname 昵称【必填】
   * @apiParam {String} phone 手机号【必填】
   * @apiParam {String} email 邮箱【必填】
   * @apiParam {String} avatar 头像【非必填】
   * @apiParam {int} org_id 部门id【必填】
   * @apiParam {int[]} roleIds 角色id集合【必填】
   * @apiParam {int} status 用户状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse addSuccess
   * @apiUse RequestError
   */
  async addAction() {
    const username = this.post('username');
    const nickname = this.post('nickname') || '';
    const orgId = this.post('org_id') || '';
    const phone = this.post('phone') || '';
    const email = this.post('email') || '';
    const avatar = this.post('avatar') || 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif';
    const status = this.post('status') || '';
    const roleIds = this.post('roleIds') || [];
    const pwd = this.post('password') || [];
    const password = think.md5(`${pwd}${username}`);

    try {
      const userModel = this.model('user');
      await userModel.transaction(async() => {
        // 新增用户
        const userId = await userModel
          .add({
            username: username,
            password: password,
            nickname: nickname,
            org_id: orgId,
            email: email,
            avatar: avatar,
            phone: phone,
            status: status
          });
        // 删除user_role
        await this.model('user_role').db(userModel.db())
          .where({user_id: userId})
          .delete();
        // 新增user_role
        if (think.isArray(roleIds) && roleIds.length > 0) {
          const data = roleIds.map(roleId => {
            return {
              user_id: userId,
              role_id: roleId
            };
          });
          await this.model('user_role').db(userModel.db())
            .addMany(data);
        }
      });

      return this.success('', '新增成功');
    } catch (e) {
      return this.fail('新增失败');
    }
  }

  /**
   * @api {put} /user/update 修改用户
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName update
   * @apiGroup 用户管理
   *
   * @apiParam {int} id 用户id【必填】
   * @apiParam {String} nickname 昵称【必填】
   * @apiParam {String} phone 手机号【必填】
   * @apiParam {String} email 邮箱【必填】
   * @apiParam {String} avatar 头像【非必填】
   * @apiParam {int} org_id 部门id【必填】
   * @apiParam {int[]} roleIds 角色id集合【必填】
   * @apiParam {int} status 用户状态 (0:正常 1:停用)【必填】
   *
   * @apiUse RequestHeader
   * @apiUse updateSuccess
   * @apiUse RequestError
   */
  async updateAction() {
    const id = this.post('id');
    const nickname = this.post('nickname') || '';
    const orgId = this.post('org_id') || '';
    const phone = this.post('phone') || '';
    const email = this.post('email') || '';
    // const avatar = this.post('avatar') || '';
    const status = this.post('status') || '';
    const roleIds = this.post('roleIds') || [];

    try {
      const userModel = this.model('user');
      await userModel.transaction(async() => {
        // 更新用户
        await userModel
          .where({id: id})
          .update({
            nickname: nickname,
            org_id: orgId,
            email: email,
            // avatar: avatar,
            phone: phone,
            status: status
          });
        // 删除user_role
        await this.model('user_role').db(userModel.db())
          .where({user_id: id})
          .delete();
        // 新增user_role
        if (think.isArray(roleIds) && roleIds.length > 0) {
          const data = roleIds.map(roleId => {
            return {
              user_id: id,
              role_id: roleId
            };
          });
          await this.model('user_role').db(userModel.db())
            .addMany(data);
        }
      });

      return this.success('', '更新成功');
    } catch (e) {
      return this.fail('更新失败');
    }
  }

  /**
   * @api {delete} /user/delete 删除用户
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName delete
   * @apiGroup 用户管理
   *
   * @apiParam {int} id 用户id【必填】
   *
   * @apiUse RequestHeader
   * @apiUse deleteSuccess
   * @apiUse RequestError
   */
  async deleteAction() {
    const id = this.get('id');
    try {
      const userModel = this.model('user');
      await userModel.transaction(async() => {
        // 删除用户
        await userModel.where({id: id}).delete();
        // 删除user_role
        await this.model('user_role').db(userModel.db())
          .where({user_id: id})
          .delete();
      });
      return this.success('', '删除成功');
    } catch (e) {
      return this.fail('删除失败');
    }
  }

  /**
   * @api {put} /user/updatePwd 个人中心修改密码
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName updatePwd
   * @apiGroup 用户管理
   *
   * @apiParam {int} id 用户id【必填】
   * @apiParam {String} username 用户名【必填】
   * @apiParam {String} password 密码【必填】
   *
   * @apiUse RequestHeader
   * @apiUse RequestSuccess
   * @apiUse RequestError
   */
  async updatePwdAction() {
    const id = this.post('id') || think.userId;
    const username = this.post('username') || think.username;
    const password = this.post('password') || '';
    const pwd = think.md5(`${password}${username}`);
    try {
      await this.model('user')
        .where({id: id})
        .update({
          password: pwd
        });
      return this.success('', '修改成功');
    } catch (e) {
      return this.fail('修改失败');
    }
  }

  /**
   * @api {put} /user/resetPwd 重置密码
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName resetPwd
   * @apiGroup 用户管理
   *
   * @apiParam {int} id 用户id【必填】
   * @apiParam {String} username 用户名【必填】
   * @apiParam {String} password 密码【必填】
   *
   * @apiUse RequestHeader
   * @apiUse RequestSuccess
   * @apiUse RequestError
   */
  async resetPwdAction() {
    const id = this.post('id');
    const username = this.post('username') || '';
    const password = this.post('password') || '';
    const pwd = think.md5(`${password}${username}`);
    try {
      await this.model('user')
        .where({id: id})
        .update({
          password: pwd
        });
      return this.success('', '修改成功');
    } catch (e) {
      return this.fail('修改失败');
    }
  }

  /**
   * @api {put} /user/profile 更新个人资料
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName profile
   * @apiGroup 用户管理
   *
   * @apiParam {int} id 用户id【必填】
   * @apiParam {String} nickname 用户名【必填】
   * @apiParam {String} phone 用户名【必填】
   * @apiParam {String} email 密码【必填】
   *
   * @apiUse RequestHeader
   * @apiUse RequestSuccess
   * @apiUse RequestError
   */
  async profileAction() {
    const id = this.post('id');
    const nickname = this.post('nickname') || '';
    const phone = this.post('phone') || '';
    const email = this.post('email') || '';

    try {
      await this.model('user')
        .where({id: id})
        .update({
          nickname: nickname,
          email: email,
          phone: phone
        });
      return this.success('', '更新成功');
    } catch (e) {
      return this.fail('更新失败');
    }
  }

  /**
   * @api {get} /user/checkPwd 检查旧密码是否正确
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName checkPwd
   * @apiGroup 用户管理
   *
   * @apiParam {String} oldPassword 旧密码【必填】
   *
   * @apiUse RequestHeader
   * @apiUse checkPwdSuccess
   * @apiUse RequestError
   */
  async checkPwdAction() {
    const password = this.get('oldPassword');
    try {
      const userInfo = await this.model('user').where({id: think.userId}).find();
      if (think.md5(`${password}${think.username}`) === userInfo.password) {
        return this.success(1, '旧密码正确');
      } else {
        return this.success(0, '旧密码不正确');
      }
    } catch (e) {
      return this.fail('检查旧密码失败');
    }
  }
};
