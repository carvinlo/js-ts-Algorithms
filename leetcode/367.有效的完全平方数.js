"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：

输入：16
输出：True
示例 2：

输入：14
输出：False
* */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let i = 1;
    let n = i * i;
    while (n <= num) {
        if (n == num)
            return true;
        else {
            i++;
            n = i ** 2;
        }
    }
    return false;
};
/**
 * 非递增而是递减
 * */
var isPerfectSquare2 = function (num) {
    let i = num >> 2;
    let n = i * i;
    while (n >= num) {
        if (n == num)
            return true;
        else {
            i--;
            n = i ** 2;
        }
    }
    return false;
};
/**
 * 二分
 * */
var isPerfectSquare3 = function (num) {
    let start = 1;
    let end = num;
    let mid = Math.floor(start + (end - start) / 2);
    while (start <= end) {
        if (mid ** 2 > num) {
            end = mid - 1;
        }
        else if (mid ** 2 < num) {
            start = mid + 1;
        }
        else
            return true;
        mid = Math.floor((end - start) / 2 + start);
    }
    return false;
};
/**
 * 公式
 * 利用 1+3+5+7+9+…+(2n-1)=n^2，即完全平方数肯定是前n个连续奇数的和
 * */
var isPerfectSquare4 = function (num) {
    let i = 1;
    while (num > 0) {
        num -= i;
        i += 2;
    }
    return num === 0;
};
/**
 * 牛顿迭代法 同 69题
 * */
var isPerfectSquare5 = function (num) {
    if (num === 1)
        return true;
    let r = num;
    while (r * r > num) {
        r = (r + num / r) / 2;
    }
    return Number.isInteger(r) && r * r === num;
};
const assert_1 = __importDefault(require("assert"));
const benchmark_1 = __importDefault(require("benchmark"));
assert_1.default.strictEqual(isPerfectSquare5(16), true);
assert_1.default.strictEqual(isPerfectSquare5(17), false);
// 使用牛顿迭代法 超时
// assert.strictEqual(
//     isPerfectSquare5(5),
//     false,
// );
const suite = new benchmark_1.default.Suite;
suite
    .add('递增', function () {
    isPerfectSquare(99999);
})
    .add('递减', function () {
    isPerfectSquare2(99999);
})
    .add('二分', function () {
    isPerfectSquare3(99999);
})
    .add('公式', function () {
    isPerfectSquare4(99999);
})
    .add('牛顿', function () {
    isPerfectSquare5(99999);
})
    .on('cycle', function (event) {
    console.log(String(event.target));
})
    .on('complete', function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
})
    // run async
    .run({ 'async': false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY3LuacieaViOeahOWujOWFqOW5s+aWueaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzY3LuacieaViOeahOWujOWFqOW5s+aWueaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLEdBQVc7SUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUixPQUFPLElBQUksQ0FBQzthQUNYO1lBQ0QsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNkO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUM7QUFDRjs7S0FFSztBQUNMLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxHQUFXO0lBQ3hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUixPQUFPLElBQUksQ0FBQzthQUNYO1lBQ0QsQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNkO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUM7QUFFRjs7S0FFSztBQUNMLElBQUksZ0JBQWdCLEdBQUcsVUFBVSxHQUFXO0lBQ3hDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFH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LEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quato+aVtOaVsCBudW3vvIznvJblhpnkuIDkuKrlh73mlbDvvIzlpoLmnpwgbnVtIOaYr+S4gOS4quWujOWFqOW5s+aWueaVsO+8jOWImei/lOWbniBUcnVl77yM5ZCm5YiZ6L+U5ZueIEZhbHNl44CCXHJcblxyXG7or7TmmI7vvJrkuI3opoHkvb/nlKjku7vkvZXlhoXnva7nmoTlupPlh73mlbDvvIzlpoIgIHNxcnTjgIJcclxuXHJcbuekuuS+iyAx77yaXHJcblxyXG7ovpPlhaXvvJoxNlxyXG7ovpPlh7rvvJpUcnVlXHJcbuekuuS+iyAy77yaXHJcblxyXG7ovpPlhaXvvJoxNFxyXG7ovpPlh7rvvJpGYWxzZVxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNQZXJmZWN0U3F1YXJlID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKSB7XHJcbiAgICBsZXQgaSA9IDE7XHJcbiAgICBsZXQgbiA9IGkgKiBpO1xyXG4gICAgd2hpbGUgKG4gPD0gbnVtKSB7XHJcbiAgICAgICAgaWYgKG4gPT0gbnVtKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBuID0gaSAqKiAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuLyoqXHJcbiAqIOmdnumAkuWinuiAjOaYr+mAkuWHj1xyXG4gKiAqL1xyXG52YXIgaXNQZXJmZWN0U3F1YXJlMiA9IGZ1bmN0aW9uIChudW06IG51bWJlcikge1xyXG4gICAgbGV0IGkgPSBudW0gPj4gMjtcclxuICAgIGxldCBuID0gaSAqIGk7XHJcbiAgICB3aGlsZSAobiA+PSBudW0pIHtcclxuICAgICAgICBpZiAobiA9PSBudW0pXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIG4gPSBpICoqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOS6jOWIhlxyXG4gKiAqL1xyXG52YXIgaXNQZXJmZWN0U3F1YXJlMyA9IGZ1bmN0aW9uIChudW06IG51bWJlcikge1xyXG4gICAgbGV0IHN0YXJ0ID0gMTtcclxuICAgIGxldCBlbmQgPSBudW07XHJcbiAgICBsZXQgbWlkID0gTWF0aC5mbG9vcihzdGFydCArIChlbmQgLSBzdGFydCkgLyAyKTtcclxuICAgIHdoaWxlIChzdGFydCA8PSBlbmQpIHtcclxuICAgICAgICBpZiAobWlkICoqIDIgPiBudW0pIHtcclxuICAgICAgICAgICAgZW5kID0gbWlkIC0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1pZCAqKiAyIDwgbnVtKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0ID0gbWlkICsgMTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIG1pZCA9IE1hdGguZmxvb3IoKGVuZCAtIHN0YXJ0KSAvIDIgKyBzdGFydCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcbi8qKlxyXG4gKiDlhazlvI9cclxuICog5Yip55SoIDErMys1KzcrOSvigKYrKDJuLTEpPW5eMu+8jOWNs+WujOWFqOW5s+aWueaVsOiCr+WumuaYr+WJjW7kuKrov57nu63lpYfmlbDnmoTlkoxcclxuICogKi9cclxudmFyIGlzUGVyZmVjdFNxdWFyZTQgPSBmdW5jdGlvbiAobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCBpID0gMTtcclxuICAgIHdoaWxlIChudW0gPiAwKSB7XHJcbiAgICAgICAgbnVtIC09IGk7XHJcbiAgICAgICAgaSArPSAyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bSA9PT0gMDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDniZvpob/ov63ku6Pms5Ug5ZCMIDY56aKYXHJcbiAqICovXHJcbnZhciBpc1BlcmZlY3RTcXVhcmU1ID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKSB7XHJcbiAgICBpZiAobnVtID09PSAxKSByZXR1cm4gdHJ1ZTtcclxuICAgIGxldCByID0gbnVtO1xyXG4gICAgd2hpbGUgKHIgKiByID4gbnVtKSB7XHJcbiAgICAgICAgciA9IChyICsgbnVtIC8gcikgLyAyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIocikgJiYgciAqIHIgPT09IG51bVxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcbmltcG9ydCBCZW5jaG1hcmsgZnJvbSBcImJlbmNobWFya1wiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgaXNQZXJmZWN0U3F1YXJlNSgxNiksXHJcbiAgICB0cnVlLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBpc1BlcmZlY3RTcXVhcmU1KDE3KSxcclxuICAgIGZhbHNlLFxyXG4pO1xyXG4vLyDkvb/nlKjniZvpob/ov63ku6Pms5Ug6LaF5pe2XHJcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChcclxuLy8gICAgIGlzUGVyZmVjdFNxdWFyZTUoNSksXHJcbi8vICAgICBmYWxzZSxcclxuLy8gKTtcclxuXHJcblxyXG5jb25zdCBzdWl0ZSA9IG5ldyBCZW5jaG1hcmsuU3VpdGU7XHJcbnN1aXRlXHJcbiAgICAuYWRkKCfpgJLlop4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaXNQZXJmZWN0U3F1YXJlKDk5OTk5KTtcclxuICAgIH0pXHJcbiAgICAuYWRkKCfpgJLlh48nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaXNQZXJmZWN0U3F1YXJlMig5OTk5OSk7XHJcbiAgICB9KVxyXG4gICAgLmFkZCgn5LqM5YiGJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlzUGVyZmVjdFNxdWFyZTMoOTk5OTkpO1xyXG4gICAgfSlcclxuICAgIC5hZGQoJ+WFrOW8jycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpc1BlcmZlY3RTcXVhcmU0KDk5OTk5KTtcclxuICAgIH0pXHJcbiAgICAuYWRkKCfniZvpob8nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaXNQZXJmZWN0U3F1YXJlNSg5OTk5OSk7XHJcbiAgICB9KVxyXG4gICAgLm9uKCdjeWNsZScsIGZ1bmN0aW9uIChldmVudDogQmVuY2htYXJrLkV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xyXG4gICAgfSlcclxuICAgIC5vbignY29tcGxldGUnLCBmdW5jdGlvbiAodGhpczogQmVuY2htYXJrLlN1aXRlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0Zhc3Rlc3QgaXMgJyArIHRoaXMuZmlsdGVyKCdmYXN0ZXN0JykubWFwKCAnbmFtZScpKTtcclxuICAgIH0pXHJcbiAgICAvLyBydW4gYXN5bmNcclxuICAgIC5ydW4oeydhc3luYyc6IGZhbHNlfSk7XHJcblxyXG5cclxuIl19