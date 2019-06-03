"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands1 = function (grid) {
    // 深度优先
    // 遍历整个二维数组
    let lands = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === "1") {
                // 如果有 1 则有一个陆地
                lands++;
                // 然后将所有与它相邻的 1 都置为 0
                setWater(x, y);
            }
        }
    }
    return lands;
    function setWater(x, y) {
        if (x < 0 || y < 0 || y >= grid.length || x >= grid[y].length)
            return;
        if (grid[y][x] === "0")
            return;
        grid[y][x] = "0";
        // 上
        setWater(x, y - 1);
        // 右
        setWater(x + 1, y);
        // 下
        setWater(x, y + 1);
        // 左
        setWater(x - 1, y);
    }
};
var numIslands2 = function (grid) {
    // 广度优先优先
    // 遍历整个二维数组
    let lands = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === "1") {
                // 如果有 1 则有一个陆地
                lands++;
                // 然后将所有与它相邻的 1 都置为 0
                setWater(x, y);
            }
        }
    }
    return lands;
    function setWater(x, y) {
        const list = [[x, y]];
        while (list.length) {
            const [x, y] = list.shift();
            if (x < 0 || y < 0 || y >= grid.length || x >= grid[y].length)
                continue;
            if (grid[y][x] === "0")
                continue;
            grid[y][x] = "0";
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
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(numIslands1([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]), 1);
assert_1.default.strictEqual(numIslands1([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]
]), 1);
assert_1.default.strictEqual(numIslands2([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]), 1);
assert_1.default.strictEqual(numIslands2([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]
]), 1);
const benchmark_1 = __importDefault(require("benchmark"));
const suite = new benchmark_1.default.Suite;
const sample = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];
suite
    .add('dfs', function () {
    numIslands1(sample);
})
    .add('bfs', function () {
    numIslands2(sample);
})
    .on('cycle', function (event) {
    console.log(String(event.target));
})
    .on('complete', function () {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
})
    // run async
    .run({ 'async': false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAwLuWym+Wxv+aVsOmHjy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjAwLuWym+Wxv+aVsOmHjy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQXdCQTs7O0dBR0c7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFVLElBQW1CO0lBQzNDLE9BQU87SUFDUCxXQUFXO0lBQ1gsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUNwQixlQUFlO2dCQUNmLEtBQUssRUFBRSxDQUFDO2dCQUNSLHFCQUFxQjtnQkFDckIsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNsQjtTQUNKO0tBQ0o7SUFFRCxPQUFPLEtBQUssQ0FBQztJQUViLFNBQVMsUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUFFLE9BQU87UUFDdEUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztZQUFFLE9BQU87UUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJO1FBQ0osUUFBUSxDQUFD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QUN6QixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDekIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0NBQUMsQ0FBQztBQUMvQixLQUFLO0tBQ0EsR0FBRyxDQUFDLEtBQUssRUFBRTtJQUNSLFdBQVcsQ0FBQyxNQUF1QixDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0tBQ0QsR0FBRyxDQUFDLEtBQUssRUFBRTtJQUNSLFdBQVcsQ0FBQyxNQUF1QixDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQXNCO0lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDWixvRUFBb0U7QUFDeEUsQ0FBQyxDQUFDO0lBQ0YsWUFBWTtLQUNYLEdBQUcsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4queUsSAnMSfvvIjpmYblnLDvvInlkowgJzAn77yI5rC077yJ57uE5oiQ55qE55qE5LqM57u0572R5qC877yM6K6h566X5bKb5bG/55qE5pWw6YeP44CC5LiA5Liq5bKb6KKr5rC05YyF5Zu077yMXG7lubbkuJTlroPmmK/pgJrov4fmsLTlubPmlrnlkJHmiJblnoLnm7TmlrnlkJHkuIrnm7jpgrvnmoTpmYblnLDov57mjqXogIzmiJDnmoTjgILkvaDlj6/ku6XlgYforr7nvZHmoLznmoTlm5vkuKrovrnlnYfooqvmsLTljIXlm7TjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTpcbjExMTEwXG4xMTAxMFxuMTEwMDBcbjAwMDAwXG5cbui+k+WHujogMVxu56S65L6LIDI6XG5cbui+k+WFpTpcbjExMDAwXG4xMTAwMFxuMDAxMDBcbjAwMDExXG5cbui+k+WHujogM1xuKiAqL1xudHlwZSBjaGFyYWN0ZXIgPSBcIjFcIiB8IFwiMFwiXG4vKipcbiAqIEBwYXJhbSB7Y2hhcmFjdGVyW11bXX0gZ3JpZFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgbnVtSXNsYW5kczEgPSBmdW5jdGlvbiAoZ3JpZDogY2hhcmFjdGVyW11bXSkge1xuICAgIC8vIOa3seW6puS8mOWFiFxuICAgIC8vIOmBjeWOhuaVtOS4quS6jOe7tOaVsOe7hFxuICAgIGxldCBsYW5kcyA9IDA7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBncmlkLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgZ3JpZFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgaWYgKGdyaWRbeV1beF0gPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5pyJIDEg5YiZ5pyJ5LiA5Liq6ZmG5ZywXG4gICAgICAgICAgICAgICAgbGFuZHMrKztcbiAgICAgICAgICAgICAgICAvLyDnhLblkI7lsIbmiYDmnInkuI7lroPnm7jpgrvnmoQgMSDpg73nva7kuLogMFxuICAgICAgICAgICAgICAgIHNldFdhdGVyKHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhbmRzO1xuXG4gICAgZnVuY3Rpb24gc2V0V2F0ZXIoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHkgPj0gZ3JpZC5sZW5ndGggfHwgeCA+PSBncmlkW3ldLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBpZiAoZ3JpZFt5XVt4XSA9PT0gXCIwXCIpIHJldHVybjtcbiAgICAgICAgZ3JpZFt5XVt4XSA9IFwiMFwiO1xuICAgICAgICAvLyDkuIpcbiAgICAgICAgc2V0V2F0ZXIoeCwgeSAtIDEpO1xuICAgICAgICAvLyDlj7NcbiAgICAgICAgc2V0V2F0ZXIoeCArIDEsIHkpO1xuICAgICAgICAvLyDkuItcbiAgICAgICAgc2V0V2F0ZXIoeCwgeSArIDEpO1xuICAgICAgICAvLyDlt6ZcbiAgICAgICAgc2V0V2F0ZXIoeCAtIDEsIHkpO1xuXG4gICAgfVxufTtcblxudmFyIG51bUlzbGFuZHMyID0gZnVuY3Rpb24gKGdyaWQ6IGNoYXJhY3RlcltdW10pIHtcbiAgICAvLyDlub/luqbkvJjlhYjkvJjlhYhcbiAgICAvLyDpgY3ljobmlbTkuKrkuoznu7TmlbDnu4RcbiAgICBsZXQgbGFuZHMgPSAwO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgZ3JpZC5sZW5ndGg7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdyaWRbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIGlmIChncmlkW3ldW3hdID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOaciSAxIOWImeacieS4gOS4qumZhuWcsFxuICAgICAgICAgICAgICAgIGxhbmRzKys7XG4gICAgICAgICAgICAgICAgLy8g54S25ZCO5bCG5omA5pyJ5LiO5a6D55u46YK755qEIDEg6YO9572u5Li6IDBcbiAgICAgICAgICAgICAgICBzZXRXYXRlcih4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsYW5kcztcblxuICAgIGZ1bmN0aW9uIHNldFdhdGVyKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBbW3gsIHldXTtcbiAgICAgICAgd2hpbGUgKGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBsaXN0LnNoaWZ0KCkhO1xuICAgICAgICAgICAgaWYgKHggPCAwIHx8IHkgPCAwIHx8IHkgPj0gZ3JpZC5sZW5ndGggfHwgeCA+PSBncmlkW3ldLmxlbmd0aCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoZ3JpZFt5XVt4XSA9PT0gXCIwXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgZ3JpZFt5XVt4XSA9IFwiMFwiO1xuICAgICAgICAgICAgLy8g5LiKXG4gICAgICAgICAgICBsaXN0LnB1c2goW3gsIHkgLSAxXSk7XG4gICAgICAgICAgICAvLyDlj7NcbiAgICAgICAgICAgIGxpc3QucHVzaChbeCArIDEsIHldKTtcbiAgICAgICAgICAgIC8vIOS4i1xuICAgICAgICAgICAgbGlzdC5wdXNoKFt4LCB5ICsgMV0pO1xuICAgICAgICAgICAgLy8g5bemXG4gICAgICAgICAgICBsaXN0LnB1c2goW3ggLSAxLCB5XSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxufTtcblxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIG51bUlzbGFuZHMxKFtcbiAgICAgICAgW1wiMVwiLCBcIjFcIiwgXCIxXCIsIFwiMVwiLCBcIjBcIl0sXG4gICAgICAgIFtcIjFcIiwgXCIxXCIsIFwiMFwiLCBcIjFcIiwgXCIwXCJdLFxuICAgICAgICBbXCIxXCIsIFwiMVwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiXSxcbiAgICAgICAgW1wiMFwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiLCBcIjBcIl1dKSxcbiAgICAxLFxuKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIG51bUlzbGFuZHMxKFxuICAgICAgICBbXG4gICAgICAgICAgICBbXCIxXCIsIFwiMVwiLCBcIjFcIl0sXG4gICAgICAgICAgICBbXCIwXCIsIFwiMVwiLCBcIjBcIl0sXG4gICAgICAgICAgICBbXCIxXCIsIFwiMVwiLCBcIjFcIl1dLFxuICAgICksXG4gICAgMSxcbik7XG5cblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIG51bUlzbGFuZHMyKFtcbiAgICAgICAgW1wiMVwiLCBcIjFcIiwgXCIxXCIsIFwiMVwiLCBcIjBcIl0sXG4gICAgICAgIFtcIjFcIiwgXCIxXCIsIFwiMFwiLCBcIjFcIiwgXCIwXCJdLFxuICAgICAgICBbXCIxXCIsIFwiMVwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiXSxcbiAgICAgICAgW1wiMFwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiLCBcIjBcIl1dKSxcbiAgICAxLFxuKTtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKFxuICAgIG51bUlzbGFuZHMyKFxuICAgICAgICBbXG4gICAgICAgICAgICBbXCIxXCIsIFwiMVwiLCBcIjFcIl0sXG4gICAgICAgICAgICBbXCIwXCIsIFwiMVwiLCBcIjBcIl0sXG4gICAgICAgICAgICBbXCIxXCIsIFwiMVwiLCBcIjFcIl1dLFxuICAgICksXG4gICAgMSxcbik7XG5cblxuaW1wb3J0IEJlbmNobWFyayBmcm9tIFwiYmVuY2htYXJrXCI7XG5cbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZTtcbmNvbnN0IHNhbXBsZSA9IFtcbiAgICBbXCIxXCIsIFwiMVwiLCBcIjFcIiwgXCIxXCIsIFwiMFwiXSxcbiAgICBbXCIxXCIsIFwiMVwiLCBcIjBcIiwgXCIxXCIsIFwiMFwiXSxcbiAgICBbXCIxXCIsIFwiMVwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiXSxcbiAgICBbXCIwXCIsIFwiMFwiLCBcIjBcIiwgXCIwXCIsIFwiMFwiXV07XG5zdWl0ZVxuICAgIC5hZGQoJ2RmcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbnVtSXNsYW5kczEoc2FtcGxlIGFzIGNoYXJhY3RlcltdW10pO1xuICAgIH0pXG4gICAgLmFkZCgnYmZzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBudW1Jc2xhbmRzMihzYW1wbGUgYXMgY2hhcmFjdGVyW11bXSk7XG4gICAgfSlcbiAgICAub24oJ2N5Y2xlJywgZnVuY3Rpb24gKGV2ZW50OiBCZW5jaG1hcmsuRXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xuICAgIH0pXG4gICAgLm9uKCdjb21wbGV0ZScsIGZ1bmN0aW9uICh0aGlzOiBCZW5jaG1hcmsuU3VpdGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0Zhc3Rlc3QgaXMgJyArIHRoaXMuZmlsdGVyKCdmYXN0ZXN0JykubWFwKCAnbmFtZScpKTtcbiAgICB9KVxuICAgIC8vIHJ1biBhc3luY1xuICAgIC5ydW4oeydhc3luYyc6IGZhbHNlfSk7XG4iXX0=