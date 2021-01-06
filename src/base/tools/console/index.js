/**
 * node的Console类继承、扩展
 * by zhaoyf    2021年1月5日09:48:48
 * 在新console实例上，扩展logStart、logEnd方法；global属性
 */
//--为控制台扩展String对象，追加设定中的颜色处理
require('./string_extend_color');
//--获取console的颜色设置
const { color } = require('./../../setting').console;
//--获取node的Console类
const { Console } = require('console');
//--获取全局变量命名空间
require('../../global');
const { $mySpace } = global;
$mySpace._deep = $mySpace._deep || 0;

//--继承node的Consol类，扩展追加logStart和logEnd方法
class MyConsole extends Console{
    constructor(props){
        super(props);//--继承原有属性
    }

    //--扩展新的logStart方法，为后续log信息创建新的展示分支
    logStart () {
        //--第一层追加时间信息
        if($mySpace._deep == 0){
            let time = new Date().toTimeString().split(' ')[0];
            time = `[${time.grey}]`;
            //--输出信息
            this.log(time, ...arguments);
        }
        else{
            this.log(...arguments);
        }
        if($mySpace._deep ++ == 0){
            //--用新的属性接收原有log方法
            this._log = this.log;
            //--重定义log方法，在输出信息前追加├ [时间]
            this.log = (function(log){
                return function(){
                    let time = new Date().toTimeString().split(' ')[0];
                    let line = '│ ';//--竖线
                    let barnch = '├─';//--分支
                    if($mySpace._endRranch){//--遇见分支结束标记
                        $mySpace._endRranch = false;//--标记设置为false
                        barnch = '└─';//--最后一个分支
                    }
                    time = `[${time.grey}]`;
                    //--输出信息
                    log(time, `${line.repeat($mySpace._deep - 1) + barnch}`, ...arguments);
                }
            })(this.log);
        }
    }

    //--扩展新的logEnd方法，结束log的展示分支
    logEnd () {
        //--分支结束标记，设置为true时，通知log输出结束标签
        $mySpace._endRranch = true;
        //--输出信息
        this.log(...arguments);
        //--树节点深度递减
        if($mySpace._deep -- == 0){
            $mySpace._deep = 0;
            //--log方法还原
            this.log = this._log || this.log;
        }
    }

    //--封装error，应用用户设置的颜色
    error = (function(err){
        return function(){
            if(color.error){
                let params = Array.from(arguments);
                params.forEach(function(val, i){
                    if(val[color.error]){
                        params[i] = val[color.error]
                    }
                });
                err(...params);
            }
            else{
                err(...arguments);
            }
        }
    })(this.error);

    //--封装warn，应用用户设置的颜色
    warn = (function(warning){
        return function(){
            if(color.warn){
                let params = Array.from(arguments);
                params.forEach(function(val, i){
                    if(val[color.warn]){
                        params[i] = val[color.warn]
                    }
                });
                warning(...params);
            }
            else{
                warning(...arguments);
            }
        }
    })(this.warn);
}

//--创建新的console实例
const _console = new MyConsole({stdout: process.stdout, stderr: process.stderr});

//--传入值为true，用新的实例，替换global中的console；值为false，则替换回原有console
Object.defineProperty(_console, 'global', {
    enumerable: false,
    configurable: false,
    set (val) {
        if(val == true){
            $mySpace.console = global.console;//--保存原来的console
            global.console = _console;//--替换为新的console实例
        }
        else if(val == false){
            global.console = $mySpace.console || global.console;//--替换回原有的console实例
            delete $mySpace.console;
        }
    }
});

module.exports = _console;