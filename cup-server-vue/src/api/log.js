import request from '@/utils/request'

/**
 * 查询
 */
export function retrieve(data) {
  return request({
    url: '/log/retrieve',
    method: 'get',
    params: data
  })
}

/**
 * 删除
 */
export function clear() {
  return request({
    url: '/log/clear',
    method: 'delete'
  })
}

