const Base = require('./base.js');

module.exports = class extends Base {
  /**
   * @api {post} /auth/login 登录
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName login
   * @apiGroup 登录登出
   * @apiParam {string} username 用户名【必填】
   * @apiParam {string} password 密码【必填】
   * @apiUse authLoginSuccess
   * @apiUse authLoginError
   */
  async loginAction() {
    // 查询用户信息
    const username = this.post('username');
    const password = this.post('password');
    const data = await this.model('user').where({
      username: username
    }).find();

    // 如果没查到用户
    if (think.isEmpty(data)) {
      return this.fail('用户名或密码错误');
    }

    // 如果密码错误
    if (think.md5(password + username) !== data.password) {
      return this.fail('用户名或密码错误');
    }

    // 如果账户停用
    if (data.status === '1') {
      return this.fail('您的账户已停用，请联系管理员');
    }

    // 创建token
    const tokenService = think.service('token', 'admin');
    const token = tokenService.create({
      id: data.id,
      username: data.username
    });

    const userInfo = {
      id: data.id,
      username: data.username
    };

    // 给think全局对象赋值
    think.token = token;

    think.logger.info(`用户 ${data.username} 在${new Date().toLocaleString()} 进行了登录`);
    // 返回信息
    this.success({
      userInfo: userInfo,
      token: token
    }, '登录成功');
  }

  /**
   * @api {post} /auth/logout 登出
   * @apiVersion 1.0.0
   * @apiDescription create by wuyanshen
   * @apiName logout
   * @apiGroup 登录登出
   * @apiUse authLogoutSuccess
   * @apiUse RequestError
   */
  async logoutAction() {
    return this.success('退出成功');
  }

  // 获取小程序access_token
  async tokenAction() {
    const tokenService = think.service('token', 'admin');
    const accessToken = await tokenService.getAccessToken();
    this.success({
      accessToken: accessToken
    });
  }
};
