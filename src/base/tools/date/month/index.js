/**
 * 时间对象的月份信息扩展
 * by zhaoyf    2021年1月7日17:44:12
 */
'use strict';
let firstDay = require('./firstday');//--时间当前月份的第一天
let lastDay = require('./lastday');//--时间对象当前月份的最后一天
Date.prototype.month = function(){
    return {
        firstDay: firstDay.bind(this),
        lastDay: lastDay.bind(this)
    }
};
module.exports = Date.prototype.month;