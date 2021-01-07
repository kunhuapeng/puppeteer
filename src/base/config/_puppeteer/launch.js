const { module } = require("../../global");

/**
 * puppeteer的launch参数配置
 * by zhaoyf    2021年1月6日09:56:21
 */
'use strict';
module.exports = {
    headless: true,//--是否开启无头模式
    args: [
        '--disable-gpu',//--禁用GPU硬件加速
        // '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',//--禁用setuid沙盒（仅限Linux）
        '--no-first-run',//--跳过第一次运行的任务
        '--no-sandbox',//--禁用沙箱
        '--no-zygote',//--禁用zygote
        '--single-process'//--将Dom解析和渲染放到同一进程
    ]
}