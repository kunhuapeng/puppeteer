/**
 * 单元测试：array.random($len)
 * by zhaoyf    2021-01-10 10:13:46
 */
'use strict';
require('./../../../base/tools/array');

(() => {
    let arr = [1,2,3,4,5,6,7,8,9,0];
    describe('测试Array的random方法', () => {
        test('测试结果长度', () => {
            expect(arr.random(5).length).toBe(5);
        });

        test('测试边界长度', () => {
            expect(arr.random(15).length).toBe(10);
        });
    });
})();