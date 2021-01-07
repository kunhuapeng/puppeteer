/**
 * 时间差运算
 * by zhaoyf    2021年1月7日16:58:58
 */
'use strict';
//--常见时间单位的秒数
const seconds = require('./seconds');
//--常见时间单位所包含的月数
const months = require('./months');

//--通过秒数增减计算
function diffSeconds(diff, s){
    return Math.floor(diff / s);
}
//--通过月数增减计算
function diffMonths(m, s, e){
    //--时间之间的月份差
    let diff = (e.getFullYear() - s.getFullYear()) * months.y + (e.getMonth() - s.getMonth());
    return Math.floor(diff / m);
}
/**
 * 时间运算函数
 * @param {String} type 时间差的类型（snhdmyw）(秒分时天月年周)
 * @param {Date} dateEnd 结束的时间
 */
module.exports = function(type, dateEnd){
    let dateStart = this;
    //--秒分时天周  有固定的秒数，通过秒数进行时间差计算
    if(seconds[type]){
        return diffSeconds(dateEnd - dateStart, seconds[type]);
    }
    //--月、季度、年，有固定的月数，用过月数进行时间差计算
    else if(months[type]){
        return diffMonths(months[type], dateStart, dateEnd);
    }
    else{
        return NaN;
    }
}