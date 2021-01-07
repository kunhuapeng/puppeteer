/**
 * Date原生对象扩展
 * by zhaoyf    2021年1月7日09:49:39
 */
'use strict';
//--扩展原有的toString方法
require('./tostring');
//--增加计算方法
require('./compute');
//--增加月份时间信息
require('./month');

module.exports = Date;