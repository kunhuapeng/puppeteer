/**
 * 某个月的最后一天
 * by zhaoyf    2021年1月7日17:45:15
 */
'use strict';
let firstDay = require('./firstday');
module.exports = function(){
    let date = this;
    let first = firstDay.call(date);
    return first.compute().add('m', 1).compute().add('d', -1);
}