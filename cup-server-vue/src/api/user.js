import request from '@/utils/request'

/** 查询 **/
export function retrieve(data) {
  return request({
    url: '/user/retrieve',
    method: 'get',
    params: data
  })
}

/** 登录 **/
export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

/** 获取登录用户信息 **/
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

/** 重置用户密码 **/
export function resetPwd(data) {
  return request({
    url: '/user/resetPwd',
    method: 'put',
    params: data
  })
}

/** 更新用户 **/
export function update(data) {
  return request({
    url: '/user/update',
    method: 'put',
    data
  })
}

/** 新增用户 **/
export function add(data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}

/** 删除用户 **/
export function del(id) {
  return request({
    url: '/user/delete',
    method: 'delete',
    params: { id }
  })
}

/** 更新个人资料 **/
export function profile(data) {
  return request({
    url: '/user/profile',
    method: 'post',
    data
  })
}

/** 检查旧密码是否正确 **/
export function checkPwd(data) {
  return request({
    url: '/user/checkPwd',
    method: 'get',
    params: data
  })
}

/** 登出 **/
export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}

