const jwt = require('jsonwebtoken');
const tokenSecret = think.config('tokenSecret', undefined, 'admin');
const tokenExpire = think.config('tokenExpire', undefined, 'admin');

module.exports = class extends think.Service {
  // 创建token
  create(data) {
    return jwt.sign(data, tokenSecret, { expiresIn: tokenExpire });
  }

  // 解析token
  parse(token) {
    return jwt.decode(token, tokenSecret);
  }

  // 校验token
  verify(token) {
    try {
      return jwt.verify(token, tokenSecret);
    } catch (e) {
      return false;
    }
  }
};
