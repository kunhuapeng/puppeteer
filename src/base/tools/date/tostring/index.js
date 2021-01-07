/**
 * 改写Date的toString方法
 * 在原有功能的基础上扩展，实现格式化时间
 * by zhaoyf    2021年1月4日16:16:41
 */
'use strict';
//按照模型格式化时间
let format = require('./format');
//--重写Date.prototype.toString方法，在原来的基础上扩展时间格式化功能
Date.prototype.toString = (function(toString){
    //--返回新的toString方法
    return function(formatModel){
        //--如果有格式化模型
        if(formatModel){
            let _format = format.bind(this);//--时间对象绑定
            return _format(formatModel);//--返回格式化后的时间
        }
        else{
            toString = toString.bind(this);//--时间对象绑定
            return toString();//--返回原有的toString结果
        }
    }
})(Date.prototype.toString);

// console.log(new Date());
// console.log(new Date().toString());
// console.log(new Date().toString('yyyy-MM-DD HH:NN:SS:II'));
// console.log(new Date().toString('yyyy-mm-dd hh:nn:ss:ii 星期ww'));

module.exports = Date.prototype.toString;