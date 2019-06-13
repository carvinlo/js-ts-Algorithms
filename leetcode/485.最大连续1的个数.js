"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个二进制数组， 计算其中最大连续1的个数。

示例 1:

输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
注意：

输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-consecutive-ones
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    if (nums.length === 0)
        return 0;
    return Math.max(...nums.join("").split("0").map(v => v.length));
};
/**
 * 快约20倍
 * */
var findMaxConsecutiveOnes_1 = function (nums) {
    if (nums.length === 0)
        return 0;
    let max = 0;
    let current_length = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            max = Math.max(max, current_length);
            current_length = 0;
        }
        else {
            current_length++;
        }
    }
    return Math.max(max, current_length);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3);
assert_1.default.strictEqual(findMaxConsecutiveOnes_1([1, 1, 0, 1, 1, 1]), 3);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg1LuacgOWkp+i/nue7rTHnmoTkuKrmlbAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQ4NS7mnIDlpKfov57nu60x55qE5Liq5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLHNCQUFzQixHQUFHLFVBQVUsSUFBYztJQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSx3QkFBd0IsR0FBRyxVQUFVLElBQWM7SUFDbkQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQ3BDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUNILGNBQWMsRUFBRSxDQUFDO1NBQ3BCO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDMUMsQ0FBQyxDQUNKLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDNUMsQ0FBQyxDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrkuozov5vliLbmlbDnu4TvvIwg6K6h566X5YW25Lit5pyA5aSn6L+e57utMeeahOS4quaVsOOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IFsxLDEsMCwxLDEsMV1cclxu6L6T5Ye6OiAzXHJcbuino+mHijog5byA5aS055qE5Lik5L2N5ZKM5pyA5ZCO55qE5LiJ5L2N6YO95piv6L+e57utMe+8jOaJgOS7peacgOWkp+i/nue7rTHnmoTkuKrmlbDmmK8gMy5cclxu5rOo5oSP77yaXHJcblxyXG7ovpPlhaXnmoTmlbDnu4Tlj6rljIXlkKvCoDAg5ZKMMeOAglxyXG7ovpPlhaXmlbDnu4TnmoTplb/luqbmmK/mraPmlbTmlbDvvIzkuJTkuI3otoXov4cgMTAsMDAw44CCXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9tYXgtY29uc2VjdXRpdmUtb25lc1xyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgZmluZE1heENvbnNlY3V0aXZlT25lcyA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xyXG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuICAgIHJldHVybiBNYXRoLm1heCguLi5udW1zLmpvaW4oXCJcIikuc3BsaXQoXCIwXCIpLm1hcCh2ID0+IHYubGVuZ3RoKSk7XHJcbn07XHJcblxyXG4vKipcclxuICog5b+r57qmMjDlgI1cclxuICogKi9cclxudmFyIGZpbmRNYXhDb25zZWN1dGl2ZU9uZXNfMSA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xyXG4gICAgaWYgKG51bXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuICAgIGxldCBtYXggPSAwO1xyXG4gICAgbGV0IGN1cnJlbnRfbGVuZ3RoID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChudW1zW2ldID09PSAwKSB7XHJcbiAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgY3VycmVudF9sZW5ndGgpO1xyXG4gICAgICAgICAgICBjdXJyZW50X2xlbmd0aCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudF9sZW5ndGgrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE1hdGgubWF4KG1heCwgY3VycmVudF9sZW5ndGgpO1xyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZmluZE1heENvbnNlY3V0aXZlT25lcyhbMSwgMSwgMCwgMSwgMSwgMV0pLFxyXG4gICAgMyxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgZmluZE1heENvbnNlY3V0aXZlT25lc18xKFsxLCAxLCAwLCAxLCAxLCAxXSksXHJcbiAgICAzLFxyXG4pO1xyXG5cclxuXHJcblxyXG4iXX0=