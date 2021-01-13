/**
 * 扩展原生对象String，追加toDate方法，将文本转换为Date类型
 * by zhaoyf    2021-01-08 09:37:39
 */
'use strict';
/**
 * @description 将文本格式的时间转成时间对象
 * @method toDate
 * @return {Date|null} 转换成功，就返回时间对象；失败返回null
 */
function toDate(){
    const str = this;
    let arr = str.split(/[- :\/\D]/g);//--拆分文本，将时间文本差分成数组
    let i = arr.length - 1;
    while(i >= 0){
        if(arr[i] == ''){
            arr.splice(i, 1);
        }
        i --;
    }
    if(arr.length > 0){//--可以格式化成时间
        if(arr[1]){//--月份从0开始，需要将实际的月份-1
            arr[1] --;
        }
        return new Date(...arr);//--返回时间
    }
    else {//--不可以格式化成时间
        return null;//--返回null
    }
};

//--扩展原生String对象
Object.defineProperty(String.prototype, 'toDate', {
    configurable: false,
    enumerable: false,
    value: toDate
});

module.exports = String.prototype.toDate;
