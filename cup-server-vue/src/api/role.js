import request from '@/utils/request'

/**
 * 查询角色
 */
export function retrieve(data) {
  return request({
    url: '/role/retrieve',
    method: 'get',
    params: data
  })
}

/**
 * 新增角色
 */
export function add(data) {
  return request({
    url: '/role/add',
    method: 'post',
    data
  })
}

/**
 * 修改角色
 */
export function update(data) {
  return request({
    url: '/role/update',
    method: 'put',
    data
  })
}

/**
 * 删除角色
 */
export function del(id) {
  return request({
    url: '/role/delete',
    method: 'delete',
    params: { id }
  })
}

/**
 * 查询角色id对应菜单id集合
 */
export function roleToMenuIds(id) {
  return request({
    url: '/role/roleToMenuIds',
    method: 'get',
    params: { id }
  })
}

/**
 * 给角色授权
 */
export function authorization(data) {
  return request({
    url: '/role/authorization',
    method: 'post',
    data
  })
}

/**
 * 查询所有角色
 */
export function all() {
  return request({
    url: '/role/all',
    method: 'get'
  })
}
