"use strict";
/*
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    backtrack("", 0, n * 2);
    return result;
    /**
     * 回溯法
     * */
    function backtrack(str, depth, n) {
        // console.log(str)
        if (n === depth) {
            return result.push(str + ")".repeat(n));
        }
        if (depth + 1 <= n) {
            backtrack(str + "(", depth + 1, n - 1);
        }
        for (let i = 1; i <= depth; i++) {
            // 只添加 )( 而不是 ) 是因为
            // 如果使用 ) 会出现 之后全是 ) 的情况 就是 重复的操作(和最上面 n === depth 的分支 重复)
            backtrack(str + ")".repeat(i) + "(", depth - i + 1, n - i - 1);
        }
    }
};
/**
 * 官方 更优雅的解法
 * */
var generateParenthesis_1 = function (n) {
    let res = [];
    function h(ps, left, right) {
        if (left == n && right == n) {
            res.push(ps);
            return;
        }
        // 优先建立 (
        if (left < n) {
            h(ps + '(', left + 1, right);
        }
        // 再是 ), 又保证了 ( 比 ) 多 才 用) 保证了 () 的合法性 妙啊
        if (left > right) {
            h(ps + ')', left, right + 1);
        }
    }
    h('', 0, 0);
    return res;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(generateParenthesis(3).sort(), [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
]);
assert_1.default.deepStrictEqual(generateParenthesis(4).sort(), ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"].sort());
assert_1.default.deepStrictEqual(generateParenthesis_1(3).sort(), [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
]);
assert_1.default.deepStrictEqual(generateParenthesis_1(4).sort(), ["(((())))", "((()()))", "((())())", "((()))()", "(()(()))", "(()()())", "(()())()", "(())(())", "(())()()", "()((()))", "()(()())", "()(())()", "()()(())", "()()()()"].sort());
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
suite
    .add("mine", function () {
    generateParenthesis(7);
})
    .add("other", function () {
    generateParenthesis_1(7);
})
    // add listeners
    .on("cycle", function (event) {
    console.log(String(event.target));
})
    .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
})
    // run async
    .run({ async: false });
/**
 * 差不多 我擦
 * */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIu5ous5Y+355Sf5oiQLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMi7mi6zlj7fnlJ/miJAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJOzs7OztBQUlKOzs7R0FHRztBQUNILElBQUksbUJBQW1CLEdBQUcsVUFBVSxDQUFTO0lBRXpDLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEIsT0FBTyxNQUFNLENBQUM7SUFFZDs7U0FFSztJQUNMLFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsQ0FBUztRQUNwRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QixtQkFBbUI7WUFDbkIsMERBQTBEO1lBRTFELFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRTtJQUNMLENBQUM7QUFDTCxDQUFDLENBQUM7QUFHRjs7S0FFSztB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Q0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztJQUNGLFlBQVk7S0FDWCxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztBQUV6Qjs7S0FFSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWHusKgbsKg5Luj6KGo55Sf5oiQ5ous5Y+355qE5a+55pWw77yM6K+35L2g5YaZ5Ye65LiA5Liq5Ye95pWw77yM5L2/5YW26IO95aSf55Sf5oiQ5omA5pyJ5Y+v6IO955qE5bm25LiU5pyJ5pWI55qE5ous5Y+357uE5ZCI44CCXHJcblxyXG7kvovlpoLvvIznu5nlh7rCoG4gPSAz77yM55Sf5oiQ57uT5p6c5Li677yaXHJcblxyXG5bXHJcbiAgXCIoKCgpKSlcIixcclxuICBcIigoKSgpKVwiLFxyXG4gIFwiKCgpKSgpXCIsXHJcbiAgXCIoKSgoKSlcIixcclxuICBcIigpKCkoKVwiXHJcbl1cclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2dlbmVyYXRlLXBhcmVudGhlc2VzXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcblxyXG5pbXBvcnQge2NyZWF0ZURvdWJsZUxpbmtlZExpc3R9IGZyb20gXCIuLi91dGlsL0RvdWJsZUxpbmtlZExpc3RcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gblxyXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cclxuICovXHJcbnZhciBnZW5lcmF0ZVBhcmVudGhlc2lzID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcclxuICAgIGJhY2t0cmFjayhcIlwiLCAwLCBuICogMik7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zue5rqv5rOVXHJcbiAgICAgKiAqL1xyXG4gICAgZnVuY3Rpb24gYmFja3RyYWNrKHN0cjogc3RyaW5nLCBkZXB0aDogbnVtYmVyLCBuOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdHIpXHJcbiAgICAgICAgaWYgKG4gPT09IGRlcHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQucHVzaChzdHIgKyBcIilcIi5yZXBlYXQobikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRlcHRoICsgMSA8PSBuKSB7XHJcbiAgICAgICAgICAgIGJhY2t0cmFjayhzdHIgKyBcIihcIiwgZGVwdGggKyAxLCBuIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBkZXB0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIOWPqua3u+WKoCApKCDogIzkuI3mmK8gKSDmmK/lm6DkuLpcclxuICAgICAgICAgICAgLy8g5aaC5p6c5L2/55SoICkg5Lya5Ye6546wIOS5i+WQjuWFqOaYryApIOeahOaDheWGtSDlsLHmmK8g6YeN5aSN55qE5pON5L2cKOWSjOacgOS4iumdoiBuID09PSBkZXB0aCDnmoTliIbmlK8g6YeN5aSNKVxyXG5cclxuICAgICAgICAgICAgYmFja3RyYWNrKHN0ciArIFwiKVwiLnJlcGVhdChpKSArIFwiKFwiLCBkZXB0aCAtIGkgKyAxLCBuIC0gaSAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcblxyXG4vKipcclxuICog5a6Y5pa5IOabtOS8mOmbheeahOino+azlVxyXG4gKiAqL1xyXG52YXIgZ2VuZXJhdGVQYXJlbnRoZXNpc18xID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xyXG4gICAgbGV0IHJlczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBoKHBzOiBzdHJpbmcsIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChsZWZ0ID09IG4gJiYgcmlnaHQgPT0gbikge1xyXG4gICAgICAgICAgICByZXMucHVzaChwcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5LyY5YWI5bu656uLIChcclxuICAgICAgICBpZiAobGVmdCA8IG4pIHtcclxuICAgICAgICAgICAgaChwcyArICcoJywgbGVmdCArIDEsIHJpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5YaN5pivICksIOWPiOS/neivgeS6hiAoIOavlCApIOWkmiDmiY0g55SoKSDkv53or4HkuoYgKCkg55qE5ZCI5rOV5oCnIOWmmeWVilxyXG4gICAgICAgIGlmIChsZWZ0ID4gcmlnaHQpIHtcclxuICAgICAgICAgICAgaChwcyArICcpJywgbGVmdCwgcmlnaHQgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaCgnJywgMCwgMCk7XHJcbiAgICByZXR1cm4gcmVzO1xyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2VuZXJhdGVQYXJlbnRoZXNpcygzKS5zb3J0KCksIFtcclxuICAgIFwiKCgoKSkpXCIsXHJcbiAgICBcIigoKSgpKVwiLFxyXG4gICAgXCIoKCkpKClcIixcclxuICAgIFwiKCkoKCkpXCIsXHJcbiAgICBcIigpKCkoKVwiLFxyXG5dKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIGdlbmVyYXRlUGFyZW50aGVzaXMoNCkuc29ydCgpLFxyXG4gICAgW1wiKCgoKCkpKSlcIiwgXCIoKCgpKCkpKVwiLCBcIigoKCkpKCkpXCIsIFwiKCgoKSkpKClcIiwgXCIoKCkoKCkpKVwiLCBcIigoKSgpKCkpXCIsIFwiKCgpKCkpKClcIiwgXCIoKCkpKCgpKVwiLCBcIigoKSkoKSgpXCIsIFwiKCkoKCgpKSlcIiwgXCIoKSgoKSgpKVwiLCBcIigpKCgpKSgpXCIsIFwiKCkoKSgoKSlcIiwgXCIoKSgpKCkoKVwiXS5zb3J0KCksXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZ2VuZXJhdGVQYXJlbnRoZXNpc18xKDMpLnNvcnQoKSwgW1xyXG4gICAgXCIoKCgpKSlcIixcclxuICAgIFwiKCgpKCkpXCIsXHJcbiAgICBcIigoKSkoKVwiLFxyXG4gICAgXCIoKSgoKSlcIixcclxuICAgIFwiKCkoKSgpXCIsXHJcbl0pO1xyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgZ2VuZXJhdGVQYXJlbnRoZXNpc18xKDQpLnNvcnQoKSxcclxuICAgIFtcIigoKCgpKSkpXCIsIFwiKCgoKSgpKSlcIiwgXCIoKCgpKSgpKVwiLCBcIigoKCkpKSgpXCIsIFwiKCgpKCgpKSlcIiwgXCIoKCkoKSgpKVwiLCBcIigoKSgpKSgpXCIsIFwiKCgpKSgoKSlcIiwgXCIoKCkpKCkoKVwiLCBcIigpKCgoKSkpXCIsIFwiKCkoKCkoKSlcIiwgXCIoKSgoKSkoKVwiLCBcIigpKCkoKCkpXCIsIFwiKCkoKSgpKClcIl0uc29ydCgpLFxyXG4pO1xyXG5cclxuY29uc3QgQmVuY2htYXJrID0gcmVxdWlyZShcImJlbmNobWFya1wiKTtcclxuY29uc3Qgc3VpdGUgPSBuZXcgQmVuY2htYXJrLlN1aXRlO1xyXG5cclxuc3VpdGVcclxuICAgIC5hZGQoXCJtaW5lXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnZW5lcmF0ZVBhcmVudGhlc2lzKDcpO1xyXG4gICAgfSlcclxuICAgIC5hZGQoXCJvdGhlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZ2VuZXJhdGVQYXJlbnRoZXNpc18xKDcpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBhZGQgbGlzdGVuZXJzXHJcbiAgICAub24oXCJjeWNsZVwiLCBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFN0cmluZyhldmVudC50YXJnZXQpKTtcclxuICAgIH0pXHJcbiAgICAub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAodGhpczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGYXN0ZXN0IGlzIFwiICsgdGhpcy5maWx0ZXIoXCJmYXN0ZXN0XCIpLm1hcChcIm5hbWVcIikpO1xyXG4gICAgfSlcclxuICAgIC8vIHJ1biBhc3luY1xyXG4gICAgLnJ1bih7YXN5bmM6IGZhbHNlfSk7XHJcblxyXG4vKipcclxuICog5beu5LiN5aSaIOaIkeaTplxyXG4gKiAqL1xyXG4iXX0=