"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。

给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，让你重新上色这幅图像。

为了完成上色工作，从初始坐标开始，记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，
接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，……，
重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。

最后返回经过上色渲染后的图像。

示例 1:

输入:
image = [
    [1,1,1],
    [1,1,0],
    [1,0,1]
]
sr = 1, sc = 1, newColor = 2
输出: [[2,2,2],[2,2,0],[2,0,1]]
解析:
在图像的正中间，(坐标(sr,sc)=(1,1)),
在路径上所有符合条件的像素点的颜色都被更改成2。
注意，右下角的像素没有更改为2，
因为它不是在上下左右四个方向上与初始点相连的像素点。
注意:

1.image 和 image[0] 的长度在范围 [1, 50] 内。
2.给出的初始点将满足 0 <= sr < image.length 和 0 <= sc < image[0].length。
3.image[i][j] 和 newColor 表示的颜色值在范围 [0, 65535]内。
* */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    // bfs
    const old_color = image[sr][sc];
    if (old_color === newColor)
        return image;
    const list = [];
    list.push([sc, sr]);
    while (list.length) {
        const [x, y] = list.shift();
        if (x < 0 || y < 0 || y >= image.length || x >= image[y].length)
            continue;
        if (image[y][x] === old_color) {
            image[y][x] = newColor;
            // 上
            list.push([x, y - 1]);
            // 右
            list.push([x + 1, y]);
            // 下
            list.push([x, y + 1]);
            // 左
            list.push([x - 1, y]);
        }
    }
    return image;
};
var floodFill_1 = function (image, sr, sc, newColor) {
    // 使用回溯算法
    fill(image, sr, sc, image[sr][sc], newColor);
    return image;
    function fill(image, x, y, origColor, newColor) {
        // 出界：超出数组边界
        if (!inArea(image, x, y))
            return;
        // 碰壁：遇到其他颜色，超出 origColor 区域
        if (image[x][y] != origColor)
            return;
        // 已探索过的 origColor 区域
        if (image[x][y] == -1)
            return;
        // choose：打标记，以免重复
        image[x][y] = -1;
        fill(image, x, y + 1, origColor, newColor);
        fill(image, x, y - 1, origColor, newColor);
        fill(image, x - 1, y, origColor, newColor);
        fill(image, x + 1, y, origColor, newColor);
        // 将标记替换为 newColor
        image[x][y] = newColor;
    }
    function inArea(image, x, y) {
        return x >= 0 && x < image.length
            && y >= 0 && y < image[0].length;
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2), [[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
assert_1.default.deepStrictEqual(floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1), [[0, 0, 0], [0, 1, 1]]);
assert_1.default.deepStrictEqual(floodFill([[0, 0, 0], [1, 0, 0]], 1, 0, 2), [[0, 0, 0], [2, 0, 0]]);
assert_1.default.deepStrictEqual(floodFill_1([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2), [[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
assert_1.default.deepStrictEqual(floodFill_1([[0, 0, 0], [0, 1, 1]], 1, 1, 1), [[0, 0, 0], [0, 1, 1]]);
assert_1.default.deepStrictEqual(floodFill_1([[0, 0, 0], [1, 0, 0]], 1, 0, 2), [[0, 0, 0], [2, 0, 0]]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzMzLuWbvuWDj+a4suafky5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzMzLuWbvuWDj+a4suafky50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBK0JJO0FBQ0o7Ozs7OztHQU1HO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxLQUFpQixFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsUUFBZ0I7SUFDakYsTUFBTTtJQUNOLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxJQUFJLFNBQVMsS0FBSyxRQUFRO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDekMsTUFBTSxJQUFJLEdBQXVCLEVBQUUsQ0FBQztJQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2hCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUFFLFNBQVM7UUFDMUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQzNCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDdkIsSUFBSTtZQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSTtZQUNK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QUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM1QyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDekIsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixXQUFXLENBQ1AsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDcEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5pyJ5LiA5bmF5Lul5LqM57u05pW05pWw5pWw57uE6KGo56S655qE5Zu+55S777yM5q+P5LiA5Liq5pW05pWw6KGo56S66K+l5Zu+55S755qE5YOP57Sg5YC85aSn5bCP77yM5pWw5YC85ZyoIDAg5YiwIDY1NTM1IOS5i+mXtOOAglxuXG7nu5nkvaDkuIDkuKrlnZDmoIcgKHNyLCBzYykg6KGo56S65Zu+5YOP5riy5p+T5byA5aeL55qE5YOP57Sg5YC877yI6KGMIO+8jOWIl++8ieWSjOS4gOS4quaWsOeahOminOiJsuWAvCBuZXdDb2xvcu+8jOiuqeS9oOmHjeaWsOS4iuiJsui/meW5heWbvuWDj+OAglxuXG7kuLrkuoblrozmiJDkuIroibLlt6XkvZzvvIzku47liJ3lp4vlnZDmoIflvIDlp4vvvIzorrDlvZXliJ3lp4vlnZDmoIfnmoTkuIrkuIvlt6blj7Plm5vkuKrmlrnlkJHkuIrlg4/ntKDlgLzkuI7liJ3lp4vlnZDmoIfnm7jlkIznmoTnm7jov57lg4/ntKDngrnvvIxcbuaOpeedgOWGjeiusOW9lei/meWbm+S4quaWueWQkeS4iuespuWQiOadoeS7tueahOWDj+e0oOeCueS4juS7luS7rOWvueW6lOWbm+S4quaWueWQkeS4iuWDj+e0oOWAvOS4juWIneWni+WdkOagh+ebuOWQjOeahOebuOi/nuWDj+e0oOeCue+8jOKApuKApu+8jFxu6YeN5aSN6K+l6L+H56iL44CC5bCG5omA5pyJ5pyJ6K6w5b2V55qE5YOP57Sg54K555qE6aKc6Imy5YC85pS55Li65paw55qE6aKc6Imy5YC844CCXG5cbuacgOWQjui/lOWbnue7j+i/h+S4iuiJsua4suafk+WQjueahOWbvuWDj+OAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOlxuaW1hZ2UgPSBbXG4gICAgWzEsMSwxXSxcbiAgICBbMSwxLDBdLFxuICAgIFsxLDAsMV1cbl1cbnNyID0gMSwgc2MgPSAxLCBuZXdDb2xvciA9IDJcbui+k+WHujogW1syLDIsMl0sWzIsMiwwXSxbMiwwLDFdXVxu6Kej5p6QOlxu5Zyo5Zu+5YOP55qE5q2j5Lit6Ze077yMKOWdkOaghyhzcixzYyk9KDEsMSkpLFxu5Zyo6Lev5b6E5LiK5omA5pyJ56ym5ZCI5p2h5Lu255qE5YOP57Sg54K555qE6aKc6Imy6YO96KKr5pu05pS55oiQMuOAglxu5rOo5oSP77yM5Y+z5LiL6KeS55qE5YOP57Sg5rKh5pyJ5pu05pS55Li6Mu+8jFxu5Zug5Li65a6D5LiN5piv5Zyo5LiK5LiL5bem5Y+z5Zub5Liq5pa55ZCR5LiK5LiO5Yid5aeL54K555u46L+e55qE5YOP57Sg54K544CCXG7ms6jmhI86XG5cbjEuaW1hZ2Ug5ZKMIGltYWdlWzBdIOeahOmVv+W6puWcqOiMg+WbtCBbMSwgNTBdIOWGheOAglxuMi7nu5nlh7rnmoTliJ3lp4vngrnlsIbmu6HotrMgMCA8PSBzciA8IGltYWdlLmxlbmd0aCDlkowgMCA8PSBzYyA8IGltYWdlWzBdLmxlbmd0aOOAglxuMy5pbWFnZVtpXVtqXSDlkowgbmV3Q29sb3Ig6KGo56S655qE6aKc6Imy5YC85Zyo6IyD5Zu0IFswLCA2NTUzNV3lhoXjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXVtdfSBpbWFnZVxuICogQHBhcmFtIHtudW1iZXJ9IHNyXG4gKiBAcGFyYW0ge251bWJlcn0gc2NcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdDb2xvclxuICogQHJldHVybiB7bnVtYmVyW11bXX1cbiAqL1xudmFyIGZsb29kRmlsbCA9IGZ1bmN0aW9uIChpbWFnZTogbnVtYmVyW11bXSwgc3I6IG51bWJlciwgc2M6IG51bWJlciwgbmV3Q29sb3I6IG51bWJlcikge1xuICAgIC8vIGJmc1xuICAgIGNvbnN0IG9sZF9jb2xvciA9IGltYWdlW3NyXVtzY107XG4gICAgaWYgKG9sZF9jb2xvciA9PT0gbmV3Q29sb3IpIHJldHVybiBpbWFnZTtcbiAgICBjb25zdCBsaXN0OiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcbiAgICBsaXN0LnB1c2goW3NjLCBzcl0pO1xuICAgIHdoaWxlIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBsaXN0LnNoaWZ0KCkhO1xuICAgICAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeSA+PSBpbWFnZS5sZW5ndGggfHwgeCA+PSBpbWFnZVt5XS5sZW5ndGgpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoaW1hZ2VbeV1beF0gPT09IG9sZF9jb2xvcikge1xuICAgICAgICAgICAgaW1hZ2VbeV1beF0gPSBuZXdDb2xvcjtcbiAgICAgICAgICAgIC8vIOS4ilxuICAgICAgICAgICAgbGlzdC5wdXNoKFt4LCB5IC0gMV0pO1xuICAgICAgICAgICAgLy8g5Y+zXG4gICAgICAgICAgICBsaXN0LnB1c2goW3ggKyAxLCB5XSk7XG4gICAgICAgICAgICAvLyDkuItcbiAgICAgICAgICAgIGxpc3QucHVzaChbeCwgeSArIDFdKTtcbiAgICAgICAgICAgIC8vIOW3plxuICAgICAgICAgICAgbGlzdC5wdXNoKFt4IC0gMSwgeV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlO1xufTtcblxudmFyIGZsb29kRmlsbF8xID0gZnVuY3Rpb24gKGltYWdlOiBudW1iZXJbXVtdLCBzcjogbnVtYmVyLCBzYzogbnVtYmVyLCBuZXdDb2xvcjogbnVtYmVyKSB7XG4gICAgLy8g5L2/55So5Zue5rqv566X5rOVXG4gICAgZmlsbChpbWFnZSwgc3IsIHNjLCBpbWFnZVtzcl1bc2NdLCBuZXdDb2xvcik7XG4gICAgcmV0dXJuIGltYWdlO1xuXG4gICAgZnVuY3Rpb24gZmlsbChpbWFnZTogbnVtYmVyW11bXSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG9yaWdDb2xvcjogbnVtYmVyLCBuZXdDb2xvcjogbnVtYmVyKSB7XG4gICAgICAgIC8vIOWHuueVjO+8mui2heWHuuaVsOe7hOi+ueeVjFxuICAgICAgICBpZiAoIWluQXJlYShpbWFnZSwgeCwgeSkpIHJldHVybjtcbiAgICAgICAgLy8g56Kw5aOB77ya6YGH5Yiw5YW25LuW6aKc6Imy77yM6LaF5Ye6IG9yaWdDb2xvciDljLrln59cbiAgICAgICAgaWYgKGltYWdlW3hdW3ldICE9IG9yaWdDb2xvcikgcmV0dXJuO1xuICAgICAgICAvLyDlt7LmjqLntKLov4fnmoQgb3JpZ0NvbG9yIOWMuuWfn1xuICAgICAgICBpZiAoaW1hZ2VbeF1beV0gPT0gLTEpIHJldHVybjtcblxuICAgICAgICAvLyBjaG9vc2XvvJrmiZPmoIforrDvvIzku6XlhY3ph43lpI1cbiAgICAgICAgaW1hZ2VbeF1beV0gPSAtMTtcbiAgICAgICAgZmlsbChpbWFnZSwgeCwgeSArIDEsIG9yaWdDb2xvciwgbmV3Q29sb3IpO1xuICAgICAgICBmaWxsKGltYWdlLCB4LCB5IC0gMSwgb3JpZ0NvbG9yLCBuZXdDb2xvcik7XG4gICAgICAgIGZpbGwoaW1hZ2UsIHggLSAxLCB5LCBvcmlnQ29sb3IsIG5ld0NvbG9yKTtcbiAgICAgICAgZmlsbChpbWFnZSwgeCArIDEsIHksIG9yaWdDb2xvciwgbmV3Q29sb3IpO1xuICAgICAgICAvLyDlsIbmoIforrDmm7/mjaLkuLogbmV3Q29sb3JcbiAgICAgICAgaW1hZ2VbeF1beV0gPSBuZXdDb2xvcjtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGluQXJlYShpbWFnZTogbnVtYmVyW11bXSwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgaW1hZ2UubGVuZ3RoXG4gICAgICAgICAgICAmJiB5ID49IDAgJiYgeSA8IGltYWdlWzBdLmxlbmd0aDtcbiAgICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBmbG9vZEZpbGwoW1sxLCAxLCAxXSwgWzEsIDEsIDBdLCBbMSwgMCwgMV1dLCAxLCAxLCAyKSxcbiAgICBbWzIsIDIsIDJdLCBbMiwgMiwgMF0sIFsyLCAwLCAxXV0sXG4pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGZsb29kRmlsbChbWzAsIDAsIDBdLCBbMCwgMSwgMV1dLCAxLCAxLCAxKSxcbiAgICBbWzAsIDAsIDBdLCBbMCwgMSwgMV1dLFxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgZmxvb2RGaWxsKFxuICAgICAgICBbWzAsIDAsIDBdLCBbMSwgMCwgMF1dLCAxLCAwLCAyKSxcbiAgICBbWzAsIDAsIDBdLCBbMiwgMCwgMF1dLFxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgZmxvb2RGaWxsXzEoW1sxLCAxLCAxXSwgWzEsIDEsIDBdLCBbMSwgMCwgMV1dLCAxLCAxLCAyKSxcbiAgICBbWzIsIDIsIDJdLCBbMiwgMiwgMF0sIFsyLCAwLCAxXV0sXG4pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIGZsb29kRmlsbF8xKFtbMCwgMCwgMF0sIFswLCAxLCAxXV0sIDEsIDEsIDEpLFxuICAgIFtbMCwgMCwgMF0sIFswLCAxLCAxXV0sXG4pO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBmbG9vZEZpbGxfMShcbiAgICAgICAgW1swLCAwLCAwXSwgWzEsIDAsIDBdXSwgMSwgMCwgMiksXG4gICAgW1swLCAwLCAwXSwgWzIsIDAsIDBdXSxcbik7XG4iXX0=