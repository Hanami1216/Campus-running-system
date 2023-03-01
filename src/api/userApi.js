import request from '@/utils/request'

/**
 *获取供应商信息
 * @returns data
 */
export function getUser(params) {
  return request({
    url: '/api/user',
    method: 'get',
    params
  })
}

/**
 *添加供应商信息
 * @returns data
 */
export function postUser(data) {
  return request({
    url: '/api/user',
    method: 'post',
    data
  })
}

/**
 *修改供应商信息
 * @returns data
 */
export function putUser(data) {
  return request({
    url: '/api/user',
    method: 'put',
    data
  })
}
/**
 *删除供应商信息
 * @returns data
 */
export function deleteUser(id) {
  return request({
    url: '/api/user' + id,
    method: 'delete'
  })
}

