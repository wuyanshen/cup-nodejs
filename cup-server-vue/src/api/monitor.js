import request from '@/utils/request'

/** 查询系统信息 **/
export function sysInfo() {
  return request({
    url: '/monitor/sysInfo',
    method: 'get'
  })
}

