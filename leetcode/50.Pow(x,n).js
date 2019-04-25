/*
实现 pow(x, n) ，即计算 x 的 n 次幂函数。

示例 1:

输入: 2.00000, 10
输出: 1024.00000
示例 2:

输入: 2.10000, 3
输出: 9.26100
示例 3:

输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
说明:

-100.0 < x < 100.0
n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
* */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    /**
     * 例 x = 2 n = 9
     * 正常算法 2 ** 9 总共做了9次乘法运算
     * 2 ** 9 = (2 * 2) ** 4 * 2 总共做了6 次乘法运算
     * 2 ** 9 = (2 * 2) ** 2 ** 2 * 2  总共做了4 次乘法运算
     * */
    let res = 1.0;
    for (let i = n; i !== 0; i = ~~(i / 2)) {
        if (i % 2 !== 0) {
            res *= x;
        }
        x *= x;
    }
    return n < 0 ? 1 / res : res;
};


const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;

function formalMultiply(x, n) {
    while (n) {
        x *= x;
        n--
    }
    return x
}

suite
    .add('formalMultiply', function () {
        formalMultiply(1.00000000000001, 99999999)
    })
    .add('myPow', function () {
        myPow(1.00000000000001, 99999999)
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();
