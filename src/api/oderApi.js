import request from '@/utils/request'

/**
 *获取订单信息
 * @returns data
 */
export function getOder(params) {
  return request({
    url: '/api/oder',
    method: 'get',
    params
  })
}
