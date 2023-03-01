import request from '@/utils/request'

/**
 *获取注册审核信息
 * @returns data
 */
export function getAudit(params) {
  return request({
    url: '/api/audit',
    method: 'get',
    params
  })
}

/**
 *添加注册审核信息
 * @returns data
 */
export function addAudit(data) {
  return request({
    url: '/api/audit',
    method: 'post',
    data
  })
}

/**
 *修改注册审核信息
 * @returns data
 */
export function putAudit(data) {
  return request({
    url: '/api/audit',
    method: 'put',
    data
  })
}
/**
 *删除注册审核信息
 * @returns data
 */
export function deleteAudit(id) {
  return request({
    url: '/api/audit' + id,
    method: 'delete'
  })
}

