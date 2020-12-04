const rp = require('request-promise');
const iconv = require('iconv-lite');

module.exports = class extends think.Service {
  /** 根据ip获取地址和真实ip信息 **/
  async getAddress(ip) {
    const options = {
      method: 'get',
      url: 'http://whois.pconline.com.cn/ipJson.jsp',
      qs: {
        ip: ip,
        json: true
      },
      encoding: null
    };
    const data = await rp(options);
    return JSON.parse(iconv.decode(data, 'gbk'));
  }
};
