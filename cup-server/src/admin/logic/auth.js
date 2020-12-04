module.exports = class extends think.Logic {
  __before() {

  }

  loginAction() {
    this.allowMethods = 'post';
    this.rules = {
      username: { required: true, string: true },
      password: { required: true, string: true }
    };
  }
};
