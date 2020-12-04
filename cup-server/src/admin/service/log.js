module.exports = class extends think.Service {
  /**
     * 新增操作日志
     */
  async add(logData) {
    try {
      return await this.model('log').add(logData);
    } catch (e) {
      return new Error(e);
    }
  }
};
