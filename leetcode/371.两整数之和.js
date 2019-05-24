"use strict";
/*
不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。

示例 1:

输入: a = 1, b = 2
输出: 3
示例 2:

输入: a = -2, b = 3
输出: 1
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    // 负数的表示
    // 符号位为1  其他位反码  然后 -1
    // 由于 符号位不同 一个正数 一个负数 做 异或运算 一定是负数
    const sum = a ^ b;
    // 表示 是不是还有没有进位的 位
    const carry = (a & b) << 1;
    if (carry)
        return getSum(sum, carry);
    return sum;
};
var getSum2 = function (a, b) {
    while (b != 0) {
        let sum = a ^ b;
        let carry = (a & b) << 1;
        a = sum;
        b = carry;
    }
    return a;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(getSum(1, 2), 3);
assert_1.default.strictEqual(getSum(-2, 3), 1);
assert_1.default.strictEqual(getSum(-9, -1), -10);
const benchmark_1 = __importDefault(require("benchmark"));
const suite = new benchmark_1.default.Suite;
suite
    .add('recursion', function () {
    getSum(99999, -1);
})
    .add('loop', function () {
    getSum2(99999, -1);
})
    .on('cycle', function (event) {
    console.log(String(event.target));
})
    .on('complete', function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
})
    // run async
    .run({ 'async': false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcxLuS4pOaVtOaVsOS5i+WSjC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzcxLuS4pOaVtOaVsOS5i+WSjC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7O0lBV0k7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDdkMsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixrQkFBa0I7SUFDbEIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLElBQUksS0FBSztRQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUNGLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDeEMsT0FBTSxDQUFDLElBQUksQ0FBQyxFQUFDO1FBQ1QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNSLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDYjtJQUNELE9BQU8sQ0FBQyxDQUFBO0FBQ1osQ0FBQyxDQUFDO0FBS0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ1osQ0FBQyxDQUNKLENBQUM7QUFFRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDZCxDQUFDLEVBQUUsQ0FDTixDQUFDO0FBQ0YsMERBQWtDO0FBQ2xDLE1BQU0sS0FBSyxHQUFHLElBQUksbUJBQVMsQ0FBQyxLQUFLLENBQUM7QUFDbEMsS0FBSztLQUNBLEdBQUcsQ0FBQyxXQUFXLEVBQUU7SUFDZCxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDO0tBQ0QsR0FBRyxDQUFDLE1BQU0sRUFBRTtJQUNULE9BQU8sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUM7S0FDRCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsS0FBc0I7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUNaLG9FQUFvRTtBQUN4RSxDQUFDLENBQUM7SUFDRixZQUFZO0tBQ1gsR0FBRyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7kuI3kvb/nlKjov5DnrpfnrKYgKyDlkowgLSDigIvigIvigIvigIvigIvigIvigIvvvIzorqHnrpfkuKTmlbTmlbAg4oCL4oCL4oCL4oCL4oCL4oCL4oCLYSDjgIFiIOKAi+KAi+KAi+KAi+KAi+KAi+KAi+S5i+WSjOOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IGEgPSAxLCBiID0gMlxyXG7ovpPlh7o6IDNcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IGEgPSAtMiwgYiA9IDNcclxu6L6T5Ye6OiAxXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gYVxyXG4gKiBAcGFyYW0ge251bWJlcn0gYlxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgZ2V0U3VtID0gZnVuY3Rpb24gKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIOi0n+aVsOeahOihqOekulxyXG4gICAgLy8g56ym5Y+35L2N5Li6MSAg5YW25LuW5L2N5Y+N56CBICDnhLblkI4gLTFcclxuICAgIC8vIOeUseS6jiDnrKblj7fkvY3kuI3lkIwg5LiA5Liq5q2j5pWwIOS4gOS4qui0n+aVsCDlgZog5byC5oiW6L+Q566XIOS4gOWumuaYr+i0n+aVsFxyXG4gICAgY29uc3Qgc3VtID0gYSBeIGI7XHJcbiAgICAvLyDooajnpLog5piv5LiN5piv6L+Y5pyJ5rKh5pyJ6L+b5L2N55qEIOS9jVxyXG4gICAgY29uc3QgY2FycnkgPSAoYSAmIGIpIDw8IDE7XHJcbiAgICBpZiAoY2FycnkpIHJldHVybiBnZXRTdW0oc3VtLCBjYXJyeSk7XHJcbiAgICByZXR1cm4gc3VtO1xyXG59O1xyXG52YXIgZ2V0U3VtMiA9IGZ1bmN0aW9uIChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICB3aGlsZShiICE9IDApe1xyXG4gICAgICAgIGxldCBzdW0gPSBhIF4gYjtcclxuICAgICAgICBsZXQgY2FycnkgPSAoYSAmIGIpIDw8IDE7XHJcbiAgICAgICAgYSA9IHN1bTtcclxuICAgICAgICBiID0gY2Fycnk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBnZXRTdW0oMSwgMiksXHJcbiAgICAzLFxyXG4pO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZ2V0U3VtKC0yLCAzKSxcclxuICAgIDEsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGdldFN1bSgtOSwgLTEpLFxyXG4gICAgLTEwLFxyXG4pO1xyXG5pbXBvcnQgQmVuY2htYXJrIGZyb20gXCJiZW5jaG1hcmtcIjtcclxuY29uc3Qgc3VpdGUgPSBuZXcgQmVuY2htYXJrLlN1aXRlO1xyXG5zdWl0ZVxyXG4gICAgLmFkZCgncmVjdXJzaW9uJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGdldFN1bSg5OTk5OSwtMSk7XHJcbiAgICB9KVxyXG4gICAgLmFkZCgnbG9vcCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnZXRTdW0yKDk5OTk5LC0xKTtcclxuICAgIH0pXHJcbiAgICAub24oJ2N5Y2xlJywgZnVuY3Rpb24gKGV2ZW50OiBCZW5jaG1hcmsuRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdjb21wbGV0ZScsIGZ1bmN0aW9uICh0aGlzOiBCZW5jaG1hcmsuU3VpdGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnRmFzdGVzdCBpcyAnICsgdGhpcy5maWx0ZXIoJ2Zhc3Rlc3QnKS5tYXAoICduYW1lJykpO1xyXG4gICAgfSlcclxuICAgIC8vIHJ1biBhc3luY1xyXG4gICAgLnJ1bih7J2FzeW5jJzogZmFsc2V9KTtcclxuIl19