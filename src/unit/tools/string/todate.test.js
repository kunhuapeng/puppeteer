/**
 * 单元测试：测试String的toDate方法
 * by zhaoyf    2021-01-12 17:33:11
 */
'use strict';
require('./../../../base/tools/string');

(() => {
    const d1 = '2015-10-10 10:10:10';
    describe('测试String的toDate方法', () => {

        test('文本转时间对象（成功）', () => {
            expect(d1.toDate()).toStrictEqual(new Date(d1));
        });

        test('文本转时间对象（失败）', () => {
            expect('我这里没有时间'.toDate()).toStrictEqual(null);
        });

        test('文本转时间对象（只有年）', () => {
            expect('2020'.toDate()).toStrictEqual(new Date('2020'));
        });

    });
})();