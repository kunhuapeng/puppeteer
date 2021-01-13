/**
 * 单元测试：测试Date的toString方法
 * by zhaoyf    2021-01-10 10:31:44
 */
'use strict';
require('./../../../base/tools/date');

(() => {
    let d1 = new Date('2015-05-09 06:06:06');
    describe('测试Date的toString方法', () => {

        test('时间格式化yyyy-MM-DD HH:NN:SS.II  星期ww', () => {
            expect(d1.toString('yyyy-MM-DD HH:NN:SS.II 星期ww')).toBe('2015-05-09 06:06:06.000 星期六');
        });

        test('时间格式化YY-mm-dd hh:nn:ss.ii', () => {
            expect(d1.toString('YY-mm-dd hh:nn:ss.ii')).toBe('15-5-9 6:6:6.0');
        });

        test('时间格式化，不处理', () => {
            expect(d1.toString()).toBe('Sat May 09 2015 06:06:06 GMT+0800 (中国标准时间)');
        });
        
    });
})();
