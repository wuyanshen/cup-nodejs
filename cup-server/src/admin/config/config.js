// default config
module.exports = {
  workers: 1,
  tokenExpire: 60 * 30, // token过期时间，单位（秒）
  tokenSecret: '^uiYqEfhuClO436F', // token加密秘钥
  publicController: [
    'auth',
    'index',
    'monitor',
    'dictItem'
  ],
  // 登录后，可以公开访问的Action
  publicAction: [
    'user/info', // 登录成功后查询用户信息
    'user/profile', // 更新个人资料
    'user/checkPwd', // 检查旧密码是否正确
    'user/resetPwd', // 重置密码
    'menu/tree', // 左侧菜单
    'menu/all', // 授权
    'role/all', // 用户管理角色下拉列表
    'role/roleToMenuIds', // 授权回显
    'org/tree', // 数据权限下拉列表
    'org/treeScope', // 用户管理左侧机构树
    'dict/info', // 字典项
    'dict/list', // 字典项
    'dict/checkDictType', // 字典项
    'config/info' // 参数设置
  ]
};
