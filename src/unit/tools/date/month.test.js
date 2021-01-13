/**
 * 单元测试：测试Date的month方法
 * by zhaoyf    2021-01-10 10:45:18
 */
'use strict';

require('./../../../base/tools/date');

(() => {
    describe('测试Date的month方法', () => {

        let d1 = new Date('2015-02-09 06:06:06');
        test('月份的第一天', () => {
            expect(d1.month().firstDay().toString('yyyy-MM-DD HH:NN:SS')).toBe('2015-02-01 00:00:00');
        });
        test('月份的最后一天', () => {
            expect(d1.month().lastDay().toString('yyyy-MM-DD HH:NN:SS')).toBe('2015-02-28 00:00:00');
        });

        let d2 = new Date('2016-02-09 06:06:06');
        test('闰月的最后一天', () => {
            expect(d2.month().lastDay().toString('yyyy-MM-DD HH:NN:SS')).toBe('2016-02-29 00:00:00');
        });
        
    });
})();
