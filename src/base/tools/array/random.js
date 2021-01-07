/**
 * 扩展数组对象，增加random方法
 * 从数组中随机取出n个元素，并返回长度为n的数组
 * by zhaoyf    2021年1月4日17:09:39
 */
'use strict';
Object.defineProperty(Array.prototype, 'random', {
    enumerable: false,
    configurable: false,
    value: function(length){
        let arr = this.slice();//--原数组复制
        //--如果长度比原数组长，则直接返回原数组的拷贝
        if(this.length <= length){
            return arr;
        }
        let r = [];    
        //--循环指定次数
        for(let i = 0; i < length; i++){
            //--获得数组长度
            let len = arr.length;
            //--在数组长度范围内取随机数
            let n = Math.floor(Math.random() * len);
            //--截取原数组的值存入返回值
            r.push(arr.splice(n, 1)[0]);
        }
        return r;
    }
});

// let arr = [1,2,3,4,5,6,7,8,9,0];
// console.log(arr.random(5));
// console.log(arr.random(5));
// console.log(arr.random(5));
// console.log(arr.random(3));
// console.log(arr.random(6));
// console.log(arr.random(8));

module.exports = Array.prototype.random;