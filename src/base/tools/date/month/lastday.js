/**
 * 某个月的最后一天
 * by zhaoyf    2021年1月7日17:45:15
 */
'use strict';
let firstDay = require('./firstday');
module.exports = function(){
    let date = this;
    let first = firstDay.call(date);
    first = first.compute().add('m', 1).setDate(0);//--日期设置为0，就是上个月的最后一天
    return new Date(first);
}