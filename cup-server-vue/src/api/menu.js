import request from '@/utils/request'

/**
 * 查询
 */
export function retrieve(data) {
  return request({
    url: '/menu/retrieve',
    method: 'get',
    params: data
  })
}

/**
 * 新增菜单
 */
export function add(data) {
  return request({
    url: '/menu/add',
    method: 'post',
    data
  })
}

/**
 * 修改菜单
 */
export function update(data) {
  return request({
    url: '/menu/update',
    method: 'put',
    data
  })
}

/**
 * 删除菜单
 */
export function del(id) {
  return request({
    url: '/menu/delete',
    method: 'delete',
    params: { id }
  })
}

/** 获取用户菜单 **/
export function menuTree() {
  return request({
    url: '/menu/tree',
    method: 'get'
  })
}

/**
 * 查询所有菜单
 */
export function all(data) {
  return request({
    url: '/menu/all',
    method: 'get',
    params: data
  })
}
