/**
 * 时间的算术运算扩展
 * by zhaoyf    2021年1月7日10:33:35
 */
'use strict';
let add = require('./add');//--时间增减计算
let diff = require('./diff');//--时间差计算
Date.prototype.compute = function(){
    return {
        add: add.bind(this),
        diff: diff.bind(this)
    }
};
module.exports = Date.prototype.compute;