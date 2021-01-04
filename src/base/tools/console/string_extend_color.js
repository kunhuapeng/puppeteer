/**
 * 为String对象扩展color的属性获取
 * by zhaoyf    2021年1月2日19:08:59
 */
const color = require('./color');
//--扩展String对象，追加颜色获取方法
for(let i in color){
    Object.defineProperty(String.prototype, i, {
        // writable: false,
        enumerable: false,
        configurable: false,
        get () {
            return `${color[i] + this}\x1B[0m`;
        }
    });
}