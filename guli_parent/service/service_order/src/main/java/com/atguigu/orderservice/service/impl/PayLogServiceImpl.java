package com.atguigu.orderservice.service.impl;

import com.atguigu.orderservice.entity.PayLog;
import com.atguigu.orderservice.mapper.PayLogMapper;
import com.atguigu.orderservice.service.PayLogService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 支付日志表 服务实现类
 * </p>
 *
 * @author Captain
 * @since 2023-03-12
 */
@Service
public class PayLogServiceImpl extends ServiceImpl<PayLogMapper, PayLog> implements PayLogService {

}
