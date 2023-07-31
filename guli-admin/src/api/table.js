import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/eduservice/teacher/findAll',
    method: 'get',
    params
  })
}
