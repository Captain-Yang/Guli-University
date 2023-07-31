import request from '@/utils/request'

export default {

    //1.讲师列表（条件查询分页）
    //current当前页 limit每页记录数 teacherQuery条件对象
    getTeacherListPage(current, limit, teacherQuery) {
        return request({
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            //teacherQuery条件对象，后端使用RequestBody获取数据
            //data表示把对象转换json进行传递到接口里面
            data: teacherQuery
        })
    },

    getTeacherList() {
        return request({
            url: '/eduservice/teacher/findAll',
            method: 'get',
        })
    },

    //2.删除教师
    removeById(teacherId) {
        return request({
            // url: `${api_name}/${teacherId}`,
            url: `/eduservice/teacher/${teacherId}`,
            method: 'delete'
        })
    },

    //3.添加教师
    save(teacher) {
        return request({
            url: '/eduservice/teacher/',
            method: 'post',
            data: teacher
        })
    },

    //4.通过id显示教师
    getById(id) {
        return request({
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get'
        })
    },

    //5.更新教师信息
    updateById(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
        })
    }
}
