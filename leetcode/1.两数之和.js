"use strict";
/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} num
 * @param {number} target
 * @return {number[]}
 */
// 暴力
var twoSum = function (nums, target) {
    for (let i = 0, len = nums.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
var twoSum1 = function (nums, target) {
    let map = {};
    nums.forEach((i, index) => {
        map[i] = index;
    });
    for (let i = 0; i < nums.length; i++) {
        let sec = target - nums[i];
        if (!!map[sec] && map[sec] !== i) {
            return [i, map[sec]];
        }
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(twoSum1([2, 7, 11, 15], 9), [0, 1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS7kuKTmlbDkuYvlkowuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEu5Lik5pWw5LmL5ZKMLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztHQU9HO0FBQ0g7Ozs7Ozs7Ozs7O0lBV0k7Ozs7O0FBRUo7Ozs7R0FJRztBQUNILEtBQUs7QUFDTCxJQUFJLE1BQU0sR0FBRyxVQUFVLElBQWMsRUFBRSxNQUFjO0lBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDZjtTQUNGO0tBQ0Y7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFJLE9BQU8sR0FBRyxVQUFVLElBQWMsRUFBRSxNQUFjO0lBQ3BELElBQUksR0FBRyxHQUFnQyxFQUFFLENBQUM7SUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsSUFBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0tBQ0Y7QUFDSCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiB5b3VyIG5hbWVcbiAqIEBEYXRlOiAyMDIwLTA0LTA4IDEwOjM3OjQyXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA2LTMwIDE1OjU4OjUxXG4gKiBATGFzdEVkaXRvcnM6IFBsZWFzZSBzZXQgTGFzdEVkaXRvcnNcbiAqIEBEZXNjcmlwdGlvbjogSW4gVXNlciBTZXR0aW5ncyBFZGl0XG4gKiBARmlsZVBhdGg6IC9qcy10cy1BbGdvcml0aG1zL2xlZXRjb2RlLzEu5Lik5pWw5LmL5ZKMLnRzXG4gKi8gXG4vKlxu57uZ5a6a5LiA5Liq5pW05pWw5pWw57uEIG51bXMg5ZKM5LiA5Liq55uu5qCH5YC8IHRhcmdldO+8jOivt+S9oOWcqOivpeaVsOe7hOS4reaJvuWHuuWSjOS4uuebruagh+WAvOeahOmCoyDkuKTkuKog5pW05pWw77yM5bm26L+U5Zue5LuW5Lus55qE5pWw57uE5LiL5qCH44CCXG5cbuS9oOWPr+S7peWBh+iuvuavj+enjei+k+WFpeWPquS8muWvueW6lOS4gOS4quetlOahiOOAguS9huaYr++8jOS9oOS4jeiDvemHjeWkjeWIqeeUqOi/meS4quaVsOe7hOS4reWQjOagt+eahOWFg+e0oOOAglxuXG7npLrkvos6XG5cbue7meWumiBudW1zID0gWzIsIDcsIDExLCAxNV0sIHRhcmdldCA9IDlcblxu5Zug5Li6IG51bXNbMF0gKyBudW1zWzFdID0gMiArIDcgPSA5XG7miYDku6Xov5Tlm54gWzAsIDFdXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0XG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cbiAqL1xuLy8g5pq05YqbXG52YXIgdHdvU3VtID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcikge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gbnVtcy5sZW5ndGg7IGkgPCBsZW4gLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBsZW47IGorKykge1xuICAgICAgaWYgKG51bXNbaV0gKyBudW1zW2pdID09PSB0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIFtpLCBqXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciB0d29TdW0xID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdLCB0YXJnZXQ6IG51bWJlcikge1xuICBsZXQgbWFwOiB7IFtpbmRleDogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcbiAgbnVtcy5mb3JFYWNoKChpOiBudW1iZXIsIGluZGV4KSA9PiB7XG4gICAgbWFwW2ldID0gaW5kZXg7XG4gIH0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc2VjID0gdGFyZ2V0IC0gbnVtc1tpXTtcbiAgICBpZiAoISFtYXBbc2VjXSAmJiBtYXBbc2VjXSAhPT0gaSkge1xuICAgICAgcmV0dXJuIFtpLCBtYXBbc2VjXV07XG4gICAgfVxuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwodHdvU3VtMShbMiwgNywgMTEsIDE1XSwgOSksIFswLCAxXSk7XG4iXX0=
