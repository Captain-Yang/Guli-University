package com.atguigu.eduservice.service;

import com.atguigu.eduservice.entity.EduChapter;
import com.atguigu.eduservice.entity.vo.ChapterVo;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 课程 服务类
 * </p>
 *
 * @author Captain
 * @since 2023-02-27
 */
public interface EduChapterService extends IService<EduChapter> {
    List<ChapterVo> nestedList(String courseId);

    boolean removeChapterById(String id);

    boolean removeByCourseId(String courseId);
}
