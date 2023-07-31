import request from '@/utils/request'

const api_name = '/staservice/statisticsDaily'
export default {
    showChart(searchObj) {
        return request({
            url: `${api_name}/showChart/${searchObj.begin}/${searchObj.end}/${searchObj.type}`,
            method: 'get'
        })
    }
}
