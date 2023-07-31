package com.atguigu.eduservice.service;

import com.atguigu.eduservice.entity.EduCourse;
import com.atguigu.eduservice.entity.vo.CourseInfoVo;
import com.atguigu.eduservice.entity.vo.CoursePublishVo;
import com.atguigu.eduservice.entity.vo.CourseQuery;
import com.atguigu.eduservice.entity.vo.CourseWebVo;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 课程 服务类
 * </p>
 *
 * @author Captain
 * @since 2023-02-27
 */
public interface EduCourseService extends IService<EduCourse> {
    String saveCourseInfo(CourseInfoVo courseInfoVo);
    CourseInfoVo getCourseInfoById(String id);
    void updateCourseInfoById(CourseInfoVo courseInfoVo);
    CoursePublishVo getCoursePublishVoById(String id);
    boolean publishCourseById(String id);
    void pageQuery(Page<EduCourse> pageParam, CourseQuery courseQuery);
    boolean removeCourseById(String id);
    List<EduCourse> selectByTeacherId(String teacherId);
    Map<String, Object> pageListWeb(Page<EduCourse> pageParam, CourseQuery courseQuery);

    /**
     * 获取课程信息
     * @param id
     * @return
     */
    CourseWebVo selectInfoWebById(String id);

    /**
     * 更新课程浏览数
     * @param id
     */
    void updatePageViewCount(String id);
}
