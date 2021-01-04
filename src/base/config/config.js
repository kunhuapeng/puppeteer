/**
 * puppeteer启动的基本设置
 * by zhaoyf    2021年1月2日17:49:03
 */
module.exports = {
    launch: {
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
}