import request from '@/utils/request'

/** 查询部门 **/
export function retrieve(data) {
  return request({
    url: '/org/retrieve',
    method: 'get',
    params: data
  })
}

/** 查询部门-> (角色管理-数据权限) **/
export function tree() {
  return request({
    url: '/org/tree',
    method: 'get'
  })
}

/** 查询部门(带数据权限过滤) **/
export function treeScope() {
  return request({
    url: '/org/treeScope',
    method: 'get'
  })
}

/** 新增部门 **/
export function add(data) {
  return request({
    url: '/org/add',
    method: 'post',
    data
  })
}

/** 删除部门 **/
export function del(id) {
  return request({
    url: '/org/delete',
    method: 'delete',
    params: { id }
  })
}

/** 修改部门 **/
export function update(data) {
  return request({
    url: '/org/update',
    method: 'put',
    data
  })
}
