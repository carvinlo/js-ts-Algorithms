"use strict";
/*
颠倒给定的 32 位无符号整数的二进制位。



示例 1：

输入: 00000010100101000001111010011100
输出: 00111001011110000010100101000000
解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
示例 2：

输入：11111111111111111111111111111101
输出：10111111111111111111111111111111
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
      因此返回 3221225471 其二进制表示形式为 10101111110010110010011101101001。


提示：

请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。


进阶:
如果多次调用这个函数，你将如何优化你的算法？
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
/**
 * 由于所有 js 的 数字都是有符号位 但是又没有 无符号左移的操作 所以 这里是不能正确 执行 二进制 末尾 是 1 的数字
 * */
var reverseBits = function (n) {
    let result = 0;
    let i = 32; // 共 32位
    while (i--) {
        result <<= 1; // 左移一位
        // n & 1 : 就取 最后一位二进制的数
        // 然后 把最后一位 加到 result 的最左边
        result += n & 1;
        // 右移一位 去掉原来的最后一位
        n >>>= 1;
    }
    return result;
};
var reverseBits2 = function (n) {
    return parseInt((n).toString(2).padStart(32, '0').split('').reverse().join(''), 2);
};
/**
 * 数学方法 10进制 转 2进制 然后手动操作位数
 * */
var reverseBits3 = function (n) {
    let nums = new Array(32).fill(0);
    let count = 0;
    while (n) {
        nums[count] = n % 2;
        count += 1;
        n = Math.trunc(n / 2);
    }
    let num = nums.join('');
    return Number.parseInt(num, 2);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(reverseBits(1), -2147483648);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkwLumioOWAkuS6jOi/m+WItuS9jS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTkwLumioOWAkuS6jOi/m+WItuS9jS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSDs7S0FFSztBQUNMLElBQUksV0FBVyxHQUFHLFVBQVUsQ0FBUztJQUNqQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRO0lBQ3BCLE9BQU8sQ0FBQyxFQUFFLEVBQUU7UUFDUixNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTztRQUNyQix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFpQjtRQUNqQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ1o7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDLENBQUM7QUFFRixJQUFJLFlBQVksR0FBRyxVQUFVLENBQVM7SUFDbEMsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxPQUFPLENBQUMsRUFBRTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDekI7SUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbumioOWAkue7meWumueahCAzMiDkvY3ml6DnrKblj7fmlbTmlbDnmoTkuozov5vliLbkvY3jgIJcblxuXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpTogMDAwMDAwMTAxMDAxMDEwMDAwMDExMTEwMTAwMTExMDBcbui+k+WHujogMDAxMTEwMDEwMTExMTAwMDAwMTAxMDAxMDEwMDAwMDBcbuino+mHijog6L6T5YWl55qE5LqM6L+b5Yi25LiyIDAwMDAwMDEwMTAwMTAxMDAwMDAxMTExMDEwMDExMTAwIOihqOekuuaXoOespuWPt+aVtOaVsCA0MzI2MTU5Nu+8jFxuICAgICAg5Zug5q2k6L+U5ZueIDk2NDE3NjE5Mu+8jOWFtuS6jOi/m+WItuihqOekuuW9ouW8j+S4uiAwMDExMTAwMTAxMTExMDAwMDAxMDEwMDEwMTAwMDAwMOOAglxu56S65L6LIDLvvJpcblxu6L6T5YWl77yaMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDFcbui+k+WHuu+8mjEwMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExXG7op6Pph4rvvJrovpPlhaXnmoTkuozov5vliLbkuLIgMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMDEg6KGo56S65peg56ym5Y+35pW05pWwIDQyOTQ5NjcyOTPvvIxcbiAgICAgIOWboOatpOi/lOWbniAzMjIxMjI1NDcxIOWFtuS6jOi/m+WItuihqOekuuW9ouW8j+S4uiAxMDEwMTExMTExMDAxMDExMDAxMDAxMTEwMTEwMTAwMeOAglxuXG5cbuaPkOekuu+8mlxuXG7or7fms6jmhI/vvIzlnKjmn5Dkupvor63oqIDvvIjlpoIgSmF2Ye+8ieS4re+8jOayoeacieaXoOespuWPt+aVtOaVsOexu+Wei+OAguWcqOi/meenjeaDheWGteS4i++8jOi+k+WFpeWSjOi+k+WHuumDveWwhuiiq+aMh+WumuS4uuacieespuWPt+aVtOaVsOexu+Wei++8jOW5tuS4lOS4jeW6lOW9seWTjeaCqOeahOWunueOsO+8jOWboOS4uuaXoOiuuuaVtOaVsOaYr+acieespuWPt+eahOi/mOaYr+aXoOespuWPt+eahO+8jOWFtuWGhemDqOeahOS6jOi/m+WItuihqOekuuW9ouW8j+mDveaYr+ebuOWQjOeahOOAglxu5ZyoIEphdmEg5Lit77yM57yW6K+R5Zmo5L2/55So5LqM6L+b5Yi26KGl56CB6K6w5rOV5p2l6KGo56S65pyJ56ym5Y+35pW05pWw44CC5Zug5q2k77yM5Zyo5LiK6Z2i55qEIOekuuS+iyAyIOS4re+8jOi+k+WFpeihqOekuuacieespuWPt+aVtOaVsCAtM++8jOi+k+WHuuihqOekuuacieespuWPt+aVtOaVsCAtMTA3Mzc0MTgyNeOAglxuXG5cbui/m+mYtjpcbuWmguaenOWkmuasoeiwg+eUqOi/meS4quWHveaVsO+8jOS9oOWwhuWmguS9leS8mOWMluS9oOeahOeul+azle+8n1xuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIC0gYSBwb3NpdGl2ZSBpbnRlZ2VyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IC0gYSBwb3NpdGl2ZSBpbnRlZ2VyXG4gKi9cbi8qKlxuICog55Sx5LqO5omA5pyJIGpzIOeahCDmlbDlrZfpg73mmK/mnInnrKblj7fkvY0g5L2G5piv5Y+I5rKh5pyJIOaXoOespuWPt+W3puenu+eahOaTjeS9nCDmiYDku6Ug6L+Z6YeM5piv5LiN6IO95q2j56GuIOaJp+ihjCDkuozov5vliLYg5pyr5bC+IOaYryAxIOeahOaVsOWtl1xuICogKi9cbnZhciByZXZlcnNlQml0cyA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBsZXQgaSA9IDMyOyAvLyDlhbEgMzLkvY1cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHJlc3VsdCA8PD0gMTsgLy8g5bem56e75LiA5L2NXG4gICAgICAgIC8vIG4gJiAxIDog5bCx5Y+WIOacgOWQjuS4gOS9jeS6jOi/m+WItueahOaVsFxuICAgICAgICAvLyDnhLblkI4g5oqK5pyA5ZCO5LiA5L2NIOWKoOWIsCByZXN1bHQg55qE5pyA5bem6L65XG4gICAgICAgIHJlc3VsdCArPSBuICYgMTtcbiAgICAgICAgLy8g5Y+z56e75LiA5L2NIOWOu+aOieWOn+adpeeahOacgOWQjuS4gOS9jVxuICAgICAgICBuID4+Pj0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciByZXZlcnNlQml0czIgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KChuKS50b1N0cmluZygyKS5wYWRTdGFydCgzMiwgJzAnKS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpLCAyKTtcbn07XG5cbi8qKlxuICog5pWw5a2m5pa55rOVIDEw6L+b5Yi2IOi9rCAy6L+b5Yi2IOeEtuWQjuaJi+WKqOaTjeS9nOS9jeaVsFxuICogKi9cbnZhciByZXZlcnNlQml0czMgPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gICAgbGV0IG51bXMgPSBuZXcgQXJyYXkoMzIpLmZpbGwoMCk7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICB3aGlsZSAobikge1xuICAgICAgICBudW1zW2NvdW50XSA9IG4gJSAyO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICBuID0gTWF0aC50cnVuYyhuIC8gMik7XG4gICAgfVxuICAgIGxldCBudW0gPSBudW1zLmpvaW4oJycpO1xuICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQobnVtLCAyKTtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwocmV2ZXJzZUJpdHMoMSksIC0yMTQ3NDgzNjQ4KTtcbiJdfQ==