import request from '@/utils/request'

/**
 *获取供应商信息
 * @returns data
 */
export function getLoginState(params) {
  return request({
    url: '/login',
    method: 'get',
    params
  })
}

