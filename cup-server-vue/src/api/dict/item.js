import request from '@/utils/request'

/**
 * 查询
 */
export function retrieve(data) {
  return request({
    url: '/dictItem/retrieve',
    method: 'get',
    params: data
  })
}

/**
 * 新增
 */
export function add(data) {
  return request({
    url: '/dictItem/add',
    method: 'post',
    data
  })
}

/**
 * 修改
 */
export function update(data) {
  return request({
    url: '/dictItem/update',
    method: 'put',
    data
  })
}

/**
 * 删除
 */
export function del(data) {
  return request({
    url: '/dictItem/delete',
    method: 'delete',
    data
  })
}

/**
 * 查询字典项列表
 */
export function getDicts(type) {
  return request({
    url: '/dictItem/list',
    method: 'get',
    params: { type }
  })
}
