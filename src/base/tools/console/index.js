/**
 * 控制台扩展工具
 * by zhaoyf    2021年1月2日18:50:44
 * 在新console实例上，扩展logStart、logEnd方法；global属性
 */
//--为控制台扩展String对象
require('./string_extend_color');
//--创建新的console实例
const {Console} = require('console');
const _console = new Console({stdout: process.stdout, stderr: process.stderr});

//--设置当前深度
global.$mySpace = global.$mySpace || {};
global.$mySpace._deep = global.$mySpace._deep || 0;

//--列表话信息输出开始，执行之后，后续的所有log输出信息，都会在前面追加├
_console.logStart = function() {
    //--第一层追加时间信息
    if(global.$mySpace._deep == 0){
        let time = new Date().toTimeString().split(' ')[0];
        time = `[${time.grey}]`;
        //--输出信息
        _console.log(time, ...arguments);
    }
    else{
        _console.log(...arguments);
    }
    if(global.$mySpace._deep == 0){
        //--用新的属性接收原有log方法
        _console._log = _console.log;
        //--重定义log方法，在输出信息前追加├ [时间]
        _console.log = (function(log){
            return function(){
                let time = new Date().toTimeString().split(' ')[0];
                let line = '│ ';//--竖线
                let barnch = '├─';//--分支
                if(global.$mySpace._endRranch){//--遇见分支结束标记
                    global.$mySpace._endRranch = false;//--标记设置为false
                    barnch = '└─';//--最后一个分支
                }
                time = `[${time.grey}]`;
                //--输出信息
                log(time, `${line.repeat(global.$mySpace._deep - 1) + barnch}`, ...arguments);
            }
        })(_console.log);
    }
    global.$mySpace._deep ++;
}

//--列表话信息输出结束，执行之后，log输出信息恢复原有功能
_console.logEnd = function() {
    //--分支结束标记，设置为true时，通知log输出结束标签
    global.$mySpace._endRranch = true;
    //--输出信息
    _console.log(...arguments);
    global.$mySpace._deep --;//--树节点深度递减
    if(global.$mySpace._deep == 0){
        //--log方法还原
        _console.log = _console._log || _console.log;
    }
}

//--传入值为true，用新的实例，替换global中的console；值为false，则替换回原有console
Object.defineProperty(_console, 'global', {
    enumerable: false,
    configurable: false,
    set (val) {
        if(val == true){
            global.$mySpace.console = global.console;
            global.console = _console;
        }
        else if(val == false){
            global.console = global.$mySpace.console || global.console;
        }
    }
});

module.exports = _console;