// default config
module.exports = {
  workers: 1,
  port: 9999,
  // 微信配置
  weixin: {
    appid: 'xxxxx',
    secret: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    mch_id: 'xxxxxxxxxxxx', // 商户号
    partner_key: 'xxxxxxxxxxxxxxxxx', // 商户秘钥
    notify_url: 'https://xxxxxxxxxxxx/api/pay/notify' // 支付回调
  },
  // 短信接口配置
  sms: {
    account: 'xxxx',
    authkey: 'xxxxxxxxxxxxxxxxx'
  },
  // minio 配置
  minio: {
    protocol: 'http',
    endPoint: '11.111.111.111',
    port: 9000,
    useSSL: false,
    accessKey: 'xxxx',
    secretKey: 'xxxxxxxxxxxxxx',
    bucketName: 'xxxx'
  }
};
