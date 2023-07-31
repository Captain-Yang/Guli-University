import request from '@/utils/request'

const api_name = '/eduservice/video'

export default {

    saveVideoInfo(videoInfo) {
        return request({
            url: `${api_name}/addVideo`,
            method: 'post',
            data: videoInfo
        })
    },

    getVideoInfoById(id) {
        return request({
            url: `${api_name}/getVideoById/${id}`,
            method: 'get'
        })
    },

    updateVideoInfoById(videoInfo) {
        return request({
            url: `${api_name}/updateVideo/${videoInfo.id}`,
            method: 'put',
            data: videoInfo
        })
    },

    removeById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'delete'
        })
    }
}