import request from '@/utils/request'

/**
 * 查询
 */
export function retrieve(data) {
  return request({
    url: '/dict/retrieve',
    method: 'get',
    params: data
  })
}

/**
 * 新增
 */
export function add(data) {
  return request({
    url: '/dict/add',
    method: 'post',
    data
  })
}

/**
 * 修改
 */
export function update(data) {
  return request({
    url: '/dict/update',
    method: 'put',
    data
  })
}

/**
 * 删除
 */
export function del(data) {
  return request({
    url: '/dict/delete',
    method: 'delete',
    data
  })
}

/**
 * 检查字典类型是否已存在
 */
export function checkDictType(data) {
  return request({
    url: '/dict/checkDictType',
    method: 'get',
    params: data
  })
}

/**
 * 查询字典列表
 */
export function list(data) {
  return request({
    url: '/dict/list',
    method: 'get',
    params: data
  })
}

/**
 * 查询字典详情
 */
export function info(id) {
  return request({
    url: '/dict/info',
    method: 'get',
    params: { id }
  })
}
