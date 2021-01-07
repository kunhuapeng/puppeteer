/**
 * 将时间格式化成模型的形式
 * 例如“yyyy-MM-DD HH:NN:SS”格式化后为“2021-01-04 16:25:33”
 * by zhaoyf    2021年1月4日16:26:15
 * 单独使用前，需要先bind(date对象)
 */
'use strict';
module.exports = function(formatModel){
    let d = this,
        keys = {//--各个关键字的值获取函数
            //--这些关键字如果出现在formatModel中，处理完成后会被替换成对应的时间值
            yyyy: () => d.getFullYear() + '',
            mm: () => (d.getMonth() + 1) + '',
            dd: () => d.getDate() + '',
            hh: () => d.getHours() + '',
            nn: () => d.getMinutes() + '',
            ss: () => d.getSeconds() + '',
            ii: () => d.getMilliseconds() + '',
            YY: () => ('' + d.getFullYear()).slice(2),
            MM: () => ('00' + (d.getMonth() + 1)).slice(-2),
            DD: () => ('00' + d.getDate()).slice(-2),
            HH: () => ('00' + d.getHours()).slice(-2),
            NN: () => ('00' + d.getMinutes()).slice(-2),
            SS: () => ('00' + d.getSeconds()).slice(-2),
            II: () => ('000' + d.getMilliseconds()).slice(-3),
            ww: () => ['日', '一', '二', '三', '四', '五', '六'][d.getDay()]
        };
    //--遍历关键字进行替换
    for(var i in keys){
        if(formatModel.indexOf(i) > -1){//--检查是否有对应关键字
            //--生成对应的正则对象，替换对应关键字的值
            let v = keys[i](),
                reg = new RegExp(i, 'g');
            formatModel = formatModel.replace(reg, v);
        }
    }
    return formatModel;//--返回处理结果
};