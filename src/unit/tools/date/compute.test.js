/**
 * 单元测试：测试Date的compute方法
 * by zhaoyf    2021-01-10 11:14:58
 */
'use strict';

require('./../../../base/tools/date');

(() => {
    describe('测试Date的compute方法', () => {
        let d1 = new Date('2016-02-29 06:06:06');
        describe('测试Date的加减运算', () => {

            test('测试时间加（秒）', () => {
                expect(d1.compute().add('s', -10).toString('yyyy-MM-DD HH:NN:SS'))
                .toBe('2016-02-29 06:05:56');
            });

            test('测试时间加（分）', () => {
                expect(d1.compute().add('n', -70).toString('yyyy-MM-DD HH:NN:SS'))
                .toBe('2016-02-29 04:56:06');
            });

            test('测试时间加（时）', () => {
                expect(d1.compute().add('h', -30).toString('yyyy-MM-DD HH:NN:SS'))
                .toBe('2016-02-28 00:06:06');
            });

            test('测试时间加（天）', () => {
                expect(d1.compute().add('d', -30).toString('yyyy-MM-DD HH:NN:SS'))
                .toBe('2016-01-30 06:06:06');
            });

            test('测试时间加（周）', () => {
                expect(d1.compute().add('w', -30).toString('yyyy-MM-DD HH:NN:SS'))
                .toBe('2015-08-03 06:06:06');
            });

            test('测试时间加（月）', () => {
                expect(d1.compute().add('m', -30).toString('yyyy-MM-DD HH:NN:SS'))
                .toBe('2013-08-29 06:06:06');
            });

            test('测试时间加（月）（闰月）', () => {
                expect(d1.compute().add('m', -12).toString('yyyy-MM-DD HH:NN:SS'))
                .toBe('2015-02-28 06:06:06');
            });

            test('测试时间加（年）', () => {
                expect(d1.compute().add('y', -30).toString('yyyy-MM-DD HH:NN:SS'))
                .toBe('1986-02-28 06:06:06');
            });

            test('测试时间加（季度）', () => {
                expect(d1.compute().add('q', -9).toString('yyyy-MM-DD HH:NN:SS'))
                .toBe('2013-11-29 06:06:06');
            });

            test('测试时间加（不符合）', () => {
                expect(d1.compute().add('qq', -9).toString('yyyy-MM-DD HH:NN:SS'))
                .toBe('2016-02-29 06:06:06');
            });

        });
        
        let d2 = new Date('2018-08-09 06:06:06');
        describe('测试Date的时间差运算', () => {

            test('测试时间差（秒）', () => {
                expect(d1.compute().diff('s', d2))
                .toBe(77068800);
            });

            test('测试时间差（分）', () => {
                expect(d1.compute().diff('n', d2))
                .toBe(1284480);
            });

            test('测试时间差（时）', () => {
                expect(d1.compute().diff('h', d2))
                .toBe(21408);
            });

            test('测试时间差（天）', () => {
                expect(d1.compute().diff('d', d2))
                .toBe(892);
            });

            test('测试时间差（周）', () => {
                expect(d1.compute().diff('w', d2))
                .toBe(127);
            });

            test('测试时间差（月）', () => {
                expect(d1.compute().diff('m', d2))
                .toBe(30);
            });

            test('测试时间差（年）', () => {
                expect(d1.compute().diff('y', d2))
                .toBe(2);
            });

            test('测试时间差（季度）', () => {
                expect(d1.compute().diff('q', d2))
                .toBe(10);
            });

            test('测试时间差（不符合）', () => {
                expect(d1.compute().diff('qq', d2))
                .toBe(NaN);
            });

        });
    });
})();
