"use strict";
/*
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 动态规划
    // 保证从头开始保证 每次都是最优解
    let max = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return max;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIxLuS5sOWNluiCoeelqOeahOacgOS9s+aXtuacui5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTIxLuS5sOWNluiCoeelqOeahOacgOS9s+aXtuacui50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTs7QUFFRjs7O0dBR0c7QUFDSCxJQUFJLFNBQVMsR0FBRyxVQUFVLE1BQWU7SUFDckMsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQ1YsR0FBRyxFQUNILE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQ2xCLENBQUM7UUFFRixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FFbEM7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrmlbDnu4TvvIzlroPnmoTnrKwgaSDkuKrlhYPntKDmmK/kuIDmlK/nu5nlrprogqHnpajnrKwgaSDlpKnnmoTku7fmoLzjgIJcblxu5aaC5p6c5L2g5pyA5aSa5Y+q5YWB6K645a6M5oiQ5LiA56yU5Lqk5piT77yI5Y2z5Lmw5YWl5ZKM5Y2W5Ye65LiA5pSv6IKh56Wo77yJ77yM6K6+6K6h5LiA5Liq566X5rOV5p2l6K6h566X5L2g5omA6IO96I635Y+W55qE5pyA5aSn5Yip5ram44CCXG5cbuazqOaEj+S9oOS4jeiDveWcqOS5sOWFpeiCoeelqOWJjeWNluWHuuiCoeelqOOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBbNywxLDUsMyw2LDRdXG7ovpPlh7o6IDVcbuino+mHijog5Zyo56ysIDIg5aSp77yI6IKh56Wo5Lu35qC8ID0gMe+8ieeahOaXtuWAmeS5sOWFpe+8jOWcqOesrCA1IOWkqe+8iOiCoeelqOS7t+agvCA9IDbvvInnmoTml7blgJnljZblh7rvvIzmnIDlpKfliKnmtqYgPSA2LTEgPSA1IOOAglxuICAgICDms6jmhI/liKnmtqbkuI3og73mmK8gNy0xID0gNiwg5Zug5Li65Y2W5Ye65Lu35qC86ZyA6KaB5aSn5LqO5Lmw5YWl5Lu35qC844CCXG7npLrkvosgMjpcblxu6L6T5YWlOiBbNyw2LDQsMywxXVxu6L6T5Ye6OiAwXG7op6Pph4o6IOWcqOi/meenjeaDheWGteS4iywg5rKh5pyJ5Lqk5piT5a6M5oiQLCDmiYDku6XmnIDlpKfliKnmtqbkuLogMOOAglxuKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBwcmljZXNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG1heFByb2ZpdCA9IGZ1bmN0aW9uIChwcmljZXM6bnVtYmVyW10pIHtcbiAgICAvLyDliqjmgIHop4TliJJcbiAgICAvLyDkv53or4Hku47lpLTlvIDlp4vkv53or4Eg5q+P5qyh6YO95piv5pyA5LyY6KejXG4gICAgbGV0IG1heCA9IDA7XG4gICAgbGV0IG1pbiA9IHByaWNlc1swXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHByaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtYXggPSBNYXRoLm1heChcbiAgICAgICAgICAgIG1heCxcbiAgICAgICAgICAgIHByaWNlc1tpXSAtIG1pblxuICAgICAgICApO1xuXG4gICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgcHJpY2VzW2ldKTtcblxuICAgIH1cbiAgICByZXR1cm4gbWF4O1xufTtcblxuZXhwb3J0IHt9XG4iXX0=