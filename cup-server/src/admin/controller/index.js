const Base = require('./base.js');

module.exports = class extends Base {
  async testAction() {
    const res = await think.service('ip', 'admin').getAddress('127.0.0.1');
    return this.success(res, '成功了');
  }
};
