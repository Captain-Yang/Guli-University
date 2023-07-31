package com.atguigu.eduservice.service;

import com.atguigu.eduservice.entity.EduVideo;
import com.atguigu.eduservice.entity.vo.VideoVo;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 * 课程视频 服务类
 * </p>
 *
 * @author Captain
 * @since 2023-02-27
 */
public interface EduVideoService extends IService<EduVideo> {

    boolean getCountByChapterId(String id);

    void saveVideoInfo(VideoVo videoVo);

    VideoVo getVideoInfoById(String id);

    void updateVideoInfoById(VideoVo videoVo);

    boolean removeVideoById(String id);

    boolean removeByCourseId(String courseId);
}
