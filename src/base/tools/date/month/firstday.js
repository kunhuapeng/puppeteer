/**
 * 某个月的第一天
 * by zhaoyf    2021年1月7日17:45:15
 */
'use strict';
module.exports = function(){
    let date = this;
    let y = date.getFullYear();
    let m = date.getMonth();
    let firstDay = new Date(y, m, 1, 0, 0, 0);
    return firstDay;
}