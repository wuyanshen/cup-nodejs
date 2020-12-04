module.exports = class extends think.Logic {
  __before() {

  }

  /**
   * 新增用户
   */
  async addAction() {
    this.allowMethods = 'post';
    this.rules = {
      username: { required: true, string: true },
      password: { required: true, string: true }
    };
  }
};
