module.exports = class extends think.Service {
  /**
     * 新增操作日志
     */
  async add(logData) {
    try {
      await this.model('log').add(logData);
      return 'success';
    } catch (e) {
      return new Error(e);
    }
  }
};
