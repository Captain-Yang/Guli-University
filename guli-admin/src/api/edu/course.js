import request from '@/utils/request'

const api_name = '/eduservice/course'

export default {

    removeById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'delete'
        })
    },

    getPageList(page, limit, searchObj) {
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },

    getCoursePublishInfoById(id) {
        return request({
            url: `${api_name}/getCoursePublishInfoById/${id}`,
            method: 'get'
        })
    },

    publishCourse(id) {
        return request({
            url: `${api_name}/publishCourse/${id}`,
            method: 'put'
        })
    },

    saveCourseInfo(courseInfo) {
        return request({
            url: `${api_name}/addCourseInfo`,
            method: 'post',
            data: courseInfo
        })
    },

    getCourseInfoById(id) {
        return request({
            url: `${api_name}/getCourseInfoById/${id}`,
            method: 'get'
        })
    },

    updateCourseInfoById(courseInfo) {
        return request({
            url: `${api_name}/updateCourseInfoById/${courseInfo.id}`,
            method: 'put',
            data: courseInfo
        })
    }
}