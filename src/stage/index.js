/**
 * 木偶剧院开幕
 * by zhaoyf    2021年1月2日19:23:30
 */
'use strict';
const { console } = require('./../base/tools');
console.global = true;

console.logStart('木偶剧院开幕了哟'.blue);
console.log('一传十，十传百'.cyan);
console.log('不好看不要钱哟'.green.redBG);
console.logEnd('准备完毕了哟'.blueBG);

console.warn('warn是黄色的');
console.error('error是红色的');
