"use strict";
/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 * 示例 2:
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 *
 * 解释: 输入不存在公共前缀。
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 * */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 方案1 暴力1
 * 干 做的超过需求了 要满足全部的
 * */
/**
 * @param {string[]} strs
 * @return {string}
 */
var _longestCommonPrefix = function (strs) {
    const map = [];
    for (let _len = 1;; _len++) {
        // 判断要不要继续
        if (map.length !== 0) {
            const lastMap = map[map.length - 1];
            if (Object.keys(lastMap).length === 0 ||
                Object.entries(lastMap).every(([, value]) => value < 2)) {
                break;
            }
        }
        map.push({});
        for (let i = 0; i < strs.length; i++) {
            const lastMap = map[map.length - 1];
            const cur = strs[i];
            // 记录本次循环
            if (strs[i].length >= _len) {
                const prefix = cur.substr(0, _len);
                lastMap[prefix] != null
                    ? (lastMap[prefix] += 1)
                    : (lastMap[prefix] = 1);
            }
        }
    }
    if (map.length > 2) {
        const _map = map[map.length - 2];
        let result;
        for (const [key, value] of Object.entries(_map)) {
            // 这里 key 和 value 不能推断 但是靠 result 来约束
            if (result) {
                if (value > result[1])
                    result = [key, value];
            }
            else {
                result = [key, value];
            }
        }
        return result[0];
    }
    else {
        return "";
    }
};
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }
    if (strs.length === 1) {
        return strs[0];
    }
    let result;
    outerLoop: for (let len = 1;; len++) {
        if (strs[0].length < len) {
            break;
        }
        let temp_str = strs[0].substr(0, len);
        for (let i = 0; i < strs.length; i++) {
            const cur_str = strs[i];
            if (cur_str.length < len) {
                break outerLoop;
            }
            if (!cur_str.startsWith(temp_str)) {
                break outerLoop;
            }
        }
        result = temp_str;
    }
    return result;
};
const assert_1 = require("assert");
assert_1.strictEqual(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
assert_1.strictEqual(longestCommonPrefix(["dog", "racecar", "car"]), "");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQu5pyA6ZW/5YWs5YWx5YmN57yALmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNC7mnIDplb/lhazlhbHliY3nvIAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCSzs7QUFFTDs7O0tBR0s7QUFDTDs7O0dBR0c7QUFDSCxJQUFJLG9CQUFvQixHQUFHLFVBQVUsSUFBYztJQUUvQyxNQUFNLEdBQUcsR0FBYyxFQUFFLENBQUM7SUFDMUIsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUksSUFBSSxFQUFFLEVBQUU7UUFDekIsVUFBVTtRQUNWLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEIsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUN6RDtnQkFDRSxNQUFNO2FBQ1Q7U0FDSjtRQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBYSxDQUFDLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLFNBQVM7WUFDVCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUN4QixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUk7b0JBQ25CLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMvQjtTQUNKO0tBQ0o7SUFDRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ2hCLE1BQU0sSUFBSSxHQUFZLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksTUFBeUIsQ0FBQztRQUM5QixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QyxxQ0FBcUM7WUFDckMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFBRSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0gsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1NBQ0o7UUFDRCxPQUFPLE1BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjtTQUFNO1FBQ0gsT0FBTyxFQUFFLENBQUM7S0FDYjtBQUVMLENBQUMsQ0FBQztBQUVGLElBQUksbUJBQW1CLEdBQUcsVUFBVSxJQUFjO0lBQzlDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUVELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEI7SUFDRCxJQUFJLE1BQWMsQ0FBQztJQUVuQixTQUFTLEVBQUUsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUksR0FBRyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUN0QixNQUFNO1NBQ1Q7UUFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFeEIsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDdEIsTUFBTSxTQUFTLENBQUM7YUFDbkI7WUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxTQUFTLENBQUM7YUFDbkI7U0FDSjtRQUVELE1BQU0sR0FBRyxRQUFRLENBQUM7S0FDckI7SUFFRCxPQUFPLE1BQU8sQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRixtQ0FBbUM7QUFFbkMsb0JBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRSxvQkFBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOe8luWGmeS4gOS4quWHveaVsOadpeafpeaJvuWtl+espuS4suaVsOe7hOS4reeahOacgOmVv+WFrOWFseWJjee8gOOAglxyXG4gKlxyXG4gKiDlpoLmnpzkuI3lrZjlnKjlhazlhbHliY3nvIDvvIzov5Tlm57nqbrlrZfnrKbkuLIgXCJcIuOAglxyXG4gKlxyXG4gKiDnpLrkvosgMTpcclxuICog6L6T5YWlOiBbXCJmbG93ZXJcIixcImZsb3dcIixcImZsaWdodFwiXVxyXG4gKiDovpPlh7o6IFwiZmxcIlxyXG4gKlxyXG4gKiDnpLrkvosgMjpcclxuICog6L6T5YWlOiBbXCJkb2dcIixcInJhY2VjYXJcIixcImNhclwiXVxyXG4gKiDovpPlh7o6IFwiXCJcclxuICpcclxuICog6Kej6YeKOiDovpPlhaXkuI3lrZjlnKjlhazlhbHliY3nvIDjgIJcclxuICog6K+05piOOlxyXG4gKlxyXG4gKiDmiYDmnInovpPlhaXlj6rljIXlkKvlsI/lhpnlrZfmr40gYS16IOOAglxyXG4gKiAqL1xyXG5cclxuLyoqXHJcbiAqIOaWueahiDEg5pq05YqbMVxyXG4gKiDlubIg5YGa55qE6LaF6L+H6ZyA5rGC5LqGIOimgea7oei2s+WFqOmDqOeahFxyXG4gKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gc3Ryc1xyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqL1xyXG52YXIgX2xvbmdlc3RDb21tb25QcmVmaXggPSBmdW5jdGlvbiAoc3Ryczogc3RyaW5nW10pIHtcclxuICAgIHR5cGUgbWFwRGF0YSA9IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XHJcbiAgICBjb25zdCBtYXA6IG1hcERhdGFbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgX2xlbiA9IDE7IDsgX2xlbisrKSB7XHJcbiAgICAgICAgLy8g5Yik5pat6KaB5LiN6KaB57un57utXHJcbiAgICAgICAgaWYgKG1hcC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdE1hcCA9IG1hcFttYXAubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxhc3RNYXApLmxlbmd0aCA9PT0gMCB8fFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMobGFzdE1hcCkuZXZlcnkoKFssIHZhbHVlXSkgPT4gdmFsdWUgPCAyKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcC5wdXNoKHt9IGFzIG1hcERhdGEpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Rycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsYXN0TWFwID0gbWFwW21hcC5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgY3VyID0gc3Ryc1tpXTtcclxuICAgICAgICAgICAgLy8g6K6w5b2V5pys5qyh5b6q546vXHJcbiAgICAgICAgICAgIGlmIChzdHJzW2ldLmxlbmd0aCA+PSBfbGVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVmaXggPSBjdXIuc3Vic3RyKDAsIF9sZW4pO1xyXG4gICAgICAgICAgICAgICAgbGFzdE1hcFtwcmVmaXhdICE9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICA/IChsYXN0TWFwW3ByZWZpeF0gKz0gMSlcclxuICAgICAgICAgICAgICAgICAgICA6IChsYXN0TWFwW3ByZWZpeF0gPSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChtYXAubGVuZ3RoID4gMikge1xyXG4gICAgICAgIGNvbnN0IF9tYXA6IG1hcERhdGEgPSBtYXBbbWFwLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgIGxldCByZXN1bHQhOiBbc3RyaW5nLCBudW1iZXJdO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKF9tYXApKSB7XHJcbiAgICAgICAgICAgIC8vIOi/memHjCBrZXkg5ZKMIHZhbHVlIOS4jeiDveaOqOaWrSDkvYbmmK/pnaAgcmVzdWx0IOadpee6puadn1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiByZXN1bHRbMV0pIHJlc3VsdCA9IFtrZXksIHZhbHVlXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtrZXksIHZhbHVlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0IVswXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxudmFyIGxvbmdlc3RDb21tb25QcmVmaXggPSBmdW5jdGlvbiAoc3Ryczogc3RyaW5nW10pIHtcclxuICAgIGlmIChzdHJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdHJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBzdHJzWzBdO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc3VsdDogc3RyaW5nO1xyXG5cclxuICAgIG91dGVyTG9vcDogZm9yIChsZXQgbGVuID0gMTsgOyBsZW4rKykge1xyXG4gICAgICAgIGlmIChzdHJzWzBdLmxlbmd0aCA8IGxlbikge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRlbXBfc3RyID0gc3Ryc1swXS5zdWJzdHIoMCwgbGVuKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyX3N0ciA9IHN0cnNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyX3N0ci5sZW5ndGggPCBsZW4pIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrIG91dGVyTG9vcDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjdXJfc3RyLnN0YXJ0c1dpdGgodGVtcF9zdHIpKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhayBvdXRlckxvb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCA9IHRlbXBfc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQhO1xyXG59O1xyXG5cclxuaW1wb3J0IHtzdHJpY3RFcXVhbH0gZnJvbSBcImFzc2VydFwiO1xyXG5cclxuc3RyaWN0RXF1YWwobG9uZ2VzdENvbW1vblByZWZpeChbXCJmbG93ZXJcIiwgXCJmbG93XCIsIFwiZmxpZ2h0XCJdKSwgXCJmbFwiKTtcclxuc3RyaWN0RXF1YWwobG9uZ2VzdENvbW1vblByZWZpeChbXCJkb2dcIiwgXCJyYWNlY2FyXCIsIFwiY2FyXCJdKSwgXCJcIik7XHJcbiJdfQ==