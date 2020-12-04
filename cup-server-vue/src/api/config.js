import request from '@/utils/request'

/**
 * 查询
 */
export function retrieve(data) {
  return request({
    url: '/config/retrieve',
    method: 'get',
    params: data
  })
}

/**
 * 新增
 */
export function add(data) {
  return request({
    url: '/config/add',
    method: 'post',
    data
  })
}

/**
 * 修改
 */
export function update(data) {
  return request({
    url: '/config/update',
    method: 'put',
    data
  })
}

/**
 * 删除
 */
export function del(data) {
  return request({
    url: '/config/delete',
    method: 'delete',
    data
  })
}

/**
 * 获取参数配置详情 -> 全局获取配置
 */
export function getConfig(key) {
  return request({
    url: '/config/info',
    method: 'get',
    params: { key }
  })
}
