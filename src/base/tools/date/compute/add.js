/**
 * 时间计算，增加/减少（年/月/日/时/分/秒）
 * by zhaoyf    2021年1月7日10:42:54
 */
'use strict';
//--常见时间单位的秒数
const seconds = require('./seconds');
//--常见时间单位所包含的月数
const months = require('./months');
//--通过秒数增减计算
function addSeconds(s){
    return new Date(this.getTime() + s);
}
//--通过月数增减计算
function addMonths(n){
    const date = this.getDate();//--获取当前日期
    const month = this.getMonth();//--获取当前月份
    const D = new Date(this);
    D.setMonth(month + n);
    //--月份增减后，两次得出的日期不一样，则可能是遇见了大小月的计算
    //--例如：3月31日，月份+1后，得出的实际时间是5月1日；因为4月没有31日；
    //--所以遇见这种情况，我们需要对结果进行修正，修正到正确月份的最后一天
    if(D.getDate() != date){
        D.setDate(0);//--日期设置为0，就是上个月的最后一天
        return D;
    }
    else{
        return D;
    }
}
/**
 * 时间运算函数
 * @param {String} type 实践增减的类型（snhdmyqw）(秒分时天月年季周)
 * @param {Number} n 增减的数量，减用负值
 */
module.exports = function(type, n){
    let date = this;
    //--秒分时天周  有固定的秒数，通过秒数进行时间增减计算
    if(seconds[type]){
        let _addSeconds = addSeconds.bind(date);
        return _addSeconds(n * seconds[type]);
    }
    //--月、季度、年，有固定的月数，用过月数进行时间增减计算
    else if(months[type]){
        let _addMonths = addMonths.bind(date);
        return _addMonths(n * months[type])
    }
    else{
        return this;
    }
};