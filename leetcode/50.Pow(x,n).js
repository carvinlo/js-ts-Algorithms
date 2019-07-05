"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    // 使用迭代法
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
// 使用递归
var myPow_1 = function (x, n) {
    // 使用递归
    if (n === 0)
        return 1;
    const half = myPow_1(x, Math.trunc(n / 2));
    if (n % 2 === 0) {
        return half * half;
    }
    else {
        return half * half * x;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAuUG93KHgsbikuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzUwLlBvdyh4LG4pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0JJO0FBQ0o7Ozs7R0FJRztBQUNILElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDdEMsUUFBUTtJQUNSOzs7OztTQUtLO0lBQ0wsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDYixHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ1o7UUFDRCxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ1Y7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRixPQUFPO0FBQ1AsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztJQUN4QyxPQUFPO0lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxJQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ1gsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFBO0tBQ3JCO1NBQUk7UUFDRCxPQUFPLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0tBQ3pCO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWunueOsCBwb3coeCwgbikg77yM5Y2z6K6h566XIHgg55qEIG4g5qyh5bmC5Ye95pWw44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IDIuMDAwMDAsIDEwXG7ovpPlh7o6IDEwMjQuMDAwMDBcbuekuuS+iyAyOlxuXG7ovpPlhaU6IDIuMTAwMDAsIDNcbui+k+WHujogOS4yNjEwMFxu56S65L6LIDM6XG5cbui+k+WFpTogMi4wMDAwMCwgLTJcbui+k+WHujogMC4yNTAwMFxu6Kej6YeKOiAyLTIgPSAxLzIyID0gMS80ID0gMC4yNVxu6K+05piOOlxuXG4tMTAwLjAgPCB4IDwgMTAwLjBcbm4g5pivIDMyIOS9jeacieespuWPt+aVtOaVsO+8jOWFtuaVsOWAvOiMg+WbtOaYryBb4oiSMjMxLCAyMzEg4oiSIDFdIOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0geFxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG15UG93ID0gZnVuY3Rpb24gKHg6IG51bWJlciwgbjogbnVtYmVyKSB7XG4gICAgLy8g5L2/55So6L+t5Luj5rOVXG4gICAgLyoqXG4gICAgICog5L6LIHggPSAyIG4gPSA5XG4gICAgICog5q2j5bi4566X5rOVIDIgKiogOSDmgLvlhbHlgZrkuoY55qyh5LmY5rOV6L+Q566XXG4gICAgICogMiAqKiA5ID0gKDIgKiAyKSAqKiA0ICogMiDmgLvlhbHlgZrkuoY2IOasoeS5mOazlei/kOeul1xuICAgICAqIDIgKiogOSA9ICgyICogMikgKiogMiAqKiAyICogMiAg5oC75YWx5YGa5LqGNCDmrKHkuZjms5Xov5DnrpdcbiAgICAgKiAqL1xuICAgIGxldCByZXMgPSAxLjA7XG4gICAgZm9yIChsZXQgaSA9IG47IGkgIT09IDA7IGkgPSB+fihpIC8gMikpIHtcbiAgICAgICAgaWYgKGkgJSAyICE9PSAwKSB7XG4gICAgICAgICAgICByZXMgKj0geDtcbiAgICAgICAgfVxuICAgICAgICB4ICo9IHg7XG4gICAgfVxuICAgIHJldHVybiBuIDwgMCA/IDEgLyByZXMgOiByZXM7XG59O1xuXG4vLyDkvb/nlKjpgJLlvZJcbnZhciBteVBvd18xID0gZnVuY3Rpb24gKHg6IG51bWJlciwgbjogbnVtYmVyKTpudW1iZXIge1xuICAgIC8vIOS9v+eUqOmAkuW9klxuICAgIGlmIChuID09PSAwKSByZXR1cm4gMTtcbiAgICBjb25zdCBoYWxmID0gbXlQb3dfMSh4LCBNYXRoLnRydW5jKG4gLyAyKSk7XG4gICAgaWYobiAlIDIgPT09IDApe1xuICAgICAgICByZXR1cm4gaGFsZiAqIGhhbGZcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGhhbGYgKiBoYWxmICogeFxuICAgIH1cbn07XG5leHBvcnQge307XG4iXX0=