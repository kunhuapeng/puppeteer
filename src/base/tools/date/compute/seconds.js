/**
 * 常见时间单位所包含的秒数
 * by zhaoyf    2021年1月7日15:27:49
 */
'use strict';
const seconds = {
    s: 1000//--秒
}
seconds.n = 60 * seconds.s;//--分
seconds.h = 60 * seconds.n;//--小时
seconds.d = 24 * seconds.h;//--天
seconds.w = 7 * seconds.d;//--周
module.exports = seconds;