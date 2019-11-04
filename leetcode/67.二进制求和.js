"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
[67] 二进制求和

https://leetcode-cn.com/problems/add-binary/description/

Tags: algorithms facebook math string

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (46.81%)
* Total Accepted: 18.5K
* Total Submissions: 39.4K
* Testcase Example: '"11"\n"1"'

给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"

示例 2:

输入: a = "1010", b = "1011"
输出: "10101"

 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = "";
    let carry_over = 0;
    let a_index = a.length - 1;
    let b_index = b.length - 1;
    while (carry_over === 1 || a_index >= 0 || b_index >= 0) {
        let count_1 = carry_over;
        if (a[a_index])
            count_1 += parseInt(a[a_index]);
        if (b[b_index])
            count_1 += parseInt(b[b_index]);
        if (count_1 === 0) {
            result = "0" + result;
            carry_over = 0;
        }
        else if (count_1 === 1) {
            result = "1" + result;
            carry_over = 0;
        }
        else if (count_1 === 2) {
            result = "0" + result;
            carry_over = 1;
        }
        else if (count_1 === 3) {
            result = "1" + result;
            carry_over = 1;
        }
        a_index--;
        b_index--;
    }
    return result;
};
/**
 * best performance
 * */
var addBinary2 = function (a, b) {
    let [i, j] = [a.length - 1, b.length - 1];
    let carry = 0;
    let ans = "";
    while (i >= 0 || j >= 0 || carry) {
        let sum = 0;
        if (i >= 0)
            sum += Number(a[i]);
        if (j >= 0)
            sum += Number(b[j]);
        sum += carry;
        carry = ~~(sum / 2);
        sum = sum % 2;
        ans = sum + ans;
        i--;
        j--;
    }
    return ans;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(addBinary2("11", "1"), "100");
assert_1.default.strictEqual(addBinary("1010", "1011"), "10101");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjcu5LqM6L+b5Yi25rGC5ZKMLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS82Ny7kuozov5vliLbmsYLlkowudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Qkc7QUFDSDs7OztHQUlHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFTLEVBQUUsQ0FBUztJQUMxQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sVUFBVSxLQUFLLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUU7UUFDckQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUFFLE9BQU8sSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQUUsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVoRCxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDZixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUN0QixVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLFVBQVUsR0FBRyxDQUFDLENBQUM7U0FDbEI7YUFBTSxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDdEIsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUNsQjthQUFNLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtZQUN0QixNQUFNLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUN0QixVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFLENBQUM7UUFDVixPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUY7O0tBRUs7QUFDTCxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQzNDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtRQUM5QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxHQUFHLElBQUksS0FBSyxDQUFDO1FBQ2IsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwQixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNkLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxFQUFFLENBQUM7S0FDUDtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQ3JCLEtBQUssQ0FDUixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFDekIsT0FBTyxDQUNWLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5bNjddIOS6jOi/m+WItuaxguWSjFxyXG5cclxuaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvYWRkLWJpbmFyeS9kZXNjcmlwdGlvbi9cclxuXHJcblRhZ3M6IGFsZ29yaXRobXMgZmFjZWJvb2sgbWF0aCBzdHJpbmdcclxuXHJcbkxhbmdzOiBjIGNwcCBjc2hhcnAgZ29sYW5nIGphdmEgamF2YXNjcmlwdCBrb3RsaW4gcGhwIHB5dGhvbiBweXRob24zIHJ1YnkgcnVzdCBzY2FsYSBzd2lmdFxyXG5cclxuKiBhbGdvcml0aG1zXHJcbiogRWFzeSAoNDYuODElKVxyXG4qIFRvdGFsIEFjY2VwdGVkOiAxOC41S1xyXG4qIFRvdGFsIFN1Ym1pc3Npb25zOiAzOS40S1xyXG4qIFRlc3RjYXNlIEV4YW1wbGU6ICdcIjExXCJcXG5cIjFcIidcclxuXHJcbue7meWumuS4pOS4quS6jOi/m+WItuWtl+espuS4su+8jOi/lOWbnuS7luS7rOeahOWSjO+8iOeUqOS6jOi/m+WItuihqOekuu+8ieOAglxyXG5cclxu6L6T5YWl5Li66Z2e56m65a2X56ym5Liy5LiU5Y+q5YyF5ZCr5pWw5a2XIDEg5ZKMIDDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBhID0gXCIxMVwiLCBiID0gXCIxXCJcclxu6L6T5Ye6OiBcIjEwMFwiXHJcblxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogYSA9IFwiMTAxMFwiLCBiID0gXCIxMDExXCJcclxu6L6T5Ye6OiBcIjEwMTAxXCJcclxuXHJcbiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IGFcclxuICogQHBhcmFtIHtzdHJpbmd9IGJcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxudmFyIGFkZEJpbmFyeSA9IGZ1bmN0aW9uIChhOiBzdHJpbmcsIGI6IHN0cmluZykge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBsZXQgY2Fycnlfb3ZlciA9IDA7XHJcbiAgICBsZXQgYV9pbmRleCA9IGEubGVuZ3RoIC0gMTtcclxuICAgIGxldCBiX2luZGV4ID0gYi5sZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKGNhcnJ5X292ZXIgPT09IDEgfHwgYV9pbmRleCA+PSAwIHx8IGJfaW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxldCBjb3VudF8xID0gY2Fycnlfb3ZlcjtcclxuICAgICAgICBpZiAoYVthX2luZGV4XSkgY291bnRfMSArPSBwYXJzZUludChhW2FfaW5kZXhdKTtcclxuICAgICAgICBpZiAoYltiX2luZGV4XSkgY291bnRfMSArPSBwYXJzZUludChiW2JfaW5kZXhdKTtcclxuXHJcbiAgICAgICAgaWYgKGNvdW50XzEgPT09IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gXCIwXCIgKyByZXN1bHQ7XHJcbiAgICAgICAgICAgIGNhcnJ5X292ZXIgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY291bnRfMSA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBcIjFcIiArIHJlc3VsdDtcclxuICAgICAgICAgICAgY2Fycnlfb3ZlciA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb3VudF8xID09PSAyKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFwiMFwiICsgcmVzdWx0O1xyXG4gICAgICAgICAgICBjYXJyeV9vdmVyID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNvdW50XzEgPT09IDMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gXCIxXCIgKyByZXN1bHQ7XHJcbiAgICAgICAgICAgIGNhcnJ5X292ZXIgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhX2luZGV4LS07XHJcbiAgICAgICAgYl9pbmRleC0tO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBiZXN0IHBlcmZvcm1hbmNlXHJcbiAqICovXHJcbnZhciBhZGRCaW5hcnkyID0gZnVuY3Rpb24gKGE6IHN0cmluZywgYjogc3RyaW5nKSB7XHJcbiAgICBsZXQgW2ksIGpdID0gW2EubGVuZ3RoIC0gMSwgYi5sZW5ndGggLSAxXTtcclxuICAgIGxldCBjYXJyeSA9IDA7XHJcbiAgICBsZXQgYW5zID0gXCJcIjtcclxuICAgIHdoaWxlIChpID49IDAgfHwgaiA+PSAwIHx8IGNhcnJ5KSB7XHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgaWYgKGkgPj0gMCkgc3VtICs9IE51bWJlcihhW2ldKTtcclxuICAgICAgICBpZiAoaiA+PSAwKSBzdW0gKz0gTnVtYmVyKGJbal0pO1xyXG4gICAgICAgIHN1bSArPSBjYXJyeTtcclxuICAgICAgICBjYXJyeSA9IH5+KHN1bSAvIDIpO1xyXG4gICAgICAgIHN1bSA9IHN1bSAlIDI7XHJcbiAgICAgICAgYW5zID0gc3VtICsgYW5zO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgICBqLS07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYW5zO1xyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgYWRkQmluYXJ5MihcIjExXCIsIFwiMVwiKSxcclxuICAgIFwiMTAwXCIsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGFkZEJpbmFyeShcIjEwMTBcIiwgXCIxMDExXCIpLFxyXG4gICAgXCIxMDEwMVwiLFxyXG4pO1xyXG4iXX0=