"use strict";
/**
 * 能执行拓扑排序的必须是一个有序无环图
 * 如果有一个非有向无环图，且A点出发向B经C可回到A，形成一个环。将从C到A的边方向改为从A到C，则变成有向无环图。
 * 拓扑排序常用来确定一个依赖关系集中，事物发生的顺序。例如，在日常工作中，可能会将项目拆分成A、B、C、D四个子部分来完成，但A依赖于B和D，C依赖于D。为了计算这个项目进行的顺序，可对这个关系集进行拓扑排序，得出一个线性的序列，则排在前面的任务就是需要先完成的任务。
 注意：这里得到的排序并不是唯一的！就好像你早上穿衣服可以先穿上衣也可以先穿裤子，只要里面的衣服在外面的衣服之前穿就行。
 * */
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.edges = 0;
        this.adj = [];
        this.vertexList = [];
        for (let i = 0; i < this.vertices; ++i) {
            this.adj[i] = [];
            this.adj[i].push("");
        }
    }
    // 添 v 到 w 的边
    addEdge(v, w) {
        this.adj[v].push(w); // v 点 能到 w
        this.adj[w].push(v); // w 点 能到 v
        this.edges++;
    }
    ;
    showGraph() {
        const visited = [];
        let output = "";
        for (let i = 0; i < this.vertices; ++i) {
            output = this.vertexList[i] + " -> ";
            visited.push(this.vertexList[i]);
            for (let j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] !== undefined && this.adj[i][j] !== "") {
                    if (visited.indexOf(this.vertexList[this.adj[i][j]]) < 0) {
                        output += this.vertexList[j] + " ";
                    }
                }
            }
            console.log(output);
            visited.pop();
        }
    }
    ;
    // 深度优先搜索
    dfs(v) {
        const marked = Array(this.vertices).fill(false);
        const { adj } = this;
        step(v);
        function step(v) {
            marked[v] = true;
            if (adj[v] !== undefined) {
                console.log("访问了顶点" + v);
            }
            adj[v].forEach((v) => {
                if (v !== "" && !marked[v]) {
                    step(v);
                }
            });
        }
    }
    // 广度优先搜索
    bfs(s) {
        const edgeTo = [];
        const queue = [];
        const marked = Array(this.vertices).fill(false);
        marked[s] = true;
        queue.push(s);
        while (queue.length > 0) {
            const w = queue.shift();
            if (w !== undefined) {
                console.log("访问了节点 " + w);
            }
            this.adj[w].forEach((v) => {
                if (v !== "" && !marked[v]) {
                    console.log(v, w);
                    edgeTo[v] = w;
                    marked[v] = true;
                    queue.push(v);
                }
            });
        }
        // console.log(edgeTo);
        return { edgeTo, marked };
    }
    ;
    // 最短路径
    pathTo(start, end) {
        // 如果是start开始的顶点 返回的edgeTo[start]一定等于undefined
        const { marked, edgeTo } = this.bfs(start);
        if (!marked[end]) { // 避免要到达的顶点其实并没有连接
            return undefined;
        }
        const path = [];
        // 一旦路径到达start 说明已经完成即停止循环
        for (let i = end; i != start; i = edgeTo[i]) {
            path.push(i);
        }
        path.push(start);
        return path.reverse();
    }
    ;
    // 拓扑排序
    topSort() {
        const stack = [];
        const visited = [];
        for (let i = 0; i < this.vertices; i++) {
            visited[i] = false;
        }
        for (let i = 0; i < this.vertices; i++) {
            if (!visited[i]) {
                this.topSortHelper(i, visited, stack);
            }
        }
        for (let i = 0; i < stack.length; i++) {
            if (stack[i] !== undefined && stack[i] !== false) {
                console.log(this.vertexList[stack[i]]);
            }
        }
    }
    ;
    topSortHelper(v, visited, stack) {
        visited[v] = true;
        this.adj[v].forEach((v, i, a) => {
            // 对于每个顶点的领接顶点 如果他已经没有其他顶点则推入栈中
            if (v !== "" && !visited[v]) {
                this.topSortHelper.call(this, v, visited, stack);
            }
        });
        stack.push(v);
    }
    ;
}
const g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(0, 1);
g.vertexList = ["CS1", "CS2", "Data Structures",
    "Assembly Language", "Operating Systems",
    "Algorithms"];
g.showGraph();
console.log("拓扑排序");
g.topSort();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5ouT5omR5o6S5bqPLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLmlbDmja7nu5PmnoQv5ouT5omR5o6S5bqPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7S0FLSzs7QUFFTCxNQUFNLEtBQUs7SUFLUCxZQUFtQixRQUFnQjtRQUFoQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBSm5DLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixRQUFHLEdBQXNCLEVBQUUsQ0FBQztRQUM1QixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBSXRCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUdELGFBQWE7SUFDYixPQUFPLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztRQUNoQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUFBLENBQUM7SUFFRixTQUFTO1FBQ0wsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNwQyxNQUFNLEdBQUcs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QUVMO0FBR0QsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsaUJBQWlCO0lBQzNDLG1CQUFtQixFQUFFLG1CQUFtQjtJQUN4QyxZQUFZLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6IO95omn6KGM5ouT5omR5o6S5bqP55qE5b+F6aG75piv5LiA5Liq5pyJ5bqP5peg546v5Zu+XG4gKiDlpoLmnpzmnInkuIDkuKrpnZ7mnInlkJHml6Dnjq/lm77vvIzkuJRB54K55Ye65Y+R5ZCRQue7j0Plj6/lm57liLBB77yM5b2i5oiQ5LiA5Liq546v44CC5bCG5LuOQ+WIsEHnmoTovrnmlrnlkJHmlLnkuLrku45B5YiwQ++8jOWImeWPmOaIkOacieWQkeaXoOeOr+WbvuOAglxuICog5ouT5omR5o6S5bqP5bi455So5p2l56Gu5a6a5LiA5Liq5L6d6LWW5YWz57O76ZuG5Lit77yM5LqL54mp5Y+R55Sf55qE6aG65bqP44CC5L6L5aaC77yM5Zyo5pel5bi45bel5L2c5Lit77yM5Y+v6IO95Lya5bCG6aG555uu5ouG5YiG5oiQQeOAgULjgIFD44CBROWbm+S4quWtkOmDqOWIhuadpeWujOaIkO+8jOS9hkHkvp3otZbkuo5C5ZKMRO+8jEPkvp3otZbkuo5E44CC5Li65LqG6K6h566X6L+Z5Liq6aG555uu6L+b6KGM55qE6aG65bqP77yM5Y+v5a+56L+Z5Liq5YWz57O76ZuG6L+b6KGM5ouT5omR5o6S5bqP77yM5b6X5Ye65LiA5Liq57q/5oCn55qE5bqP5YiX77yM5YiZ5o6S5Zyo5YmN6Z2i55qE5Lu75Yqh5bCx5piv6ZyA6KaB5YWI5a6M5oiQ55qE5Lu75Yqh44CCXG4g5rOo5oSP77ya6L+Z6YeM5b6X5Yiw55qE5o6S5bqP5bm25LiN5piv5ZSv5LiA55qE77yB5bCx5aW95YOP5L2g5pep5LiK56m/6KGj5pyN5Y+v5Lul5YWI56m/5LiK6KGj5Lmf5Y+v5Lul5YWI56m/6KOk5a2Q77yM5Y+q6KaB6YeM6Z2i55qE6KGj5pyN5Zyo5aSW6Z2i55qE6KGj5pyN5LmL5YmN56m/5bCx6KGM44CCXG4gKiAqL1xuXG5jbGFzcyBHcmFwaCB7XG4gICAgZWRnZXMgPSAwO1xuICAgIGFkajogKG51bWJlciB8IFwiXCIpW11bXSA9IFtdO1xuICAgIHZlcnRleExpc3Q6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmVydGljZXM6IG51bWJlcikge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlczsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmFkaltpXSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5hZGpbaV0ucHVzaChcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8g5re7IHYg5YiwIHcg55qE6L65XG4gICAgYWRkRWRnZSh2OiBudW1iZXIsIHc6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFkalt2XS5wdXNoKHcpOyAvLyB2IOeCuSDog73liLAgd1xuICAgICAgICB0aGlzLmFkalt3XS5wdXNoKHYpOyAvLyB3IOeCuSDog73liLAgdlxuICAgICAgICB0aGlzLmVkZ2VzKys7XG4gICAgfTtcblxuICAgIHNob3dHcmFwaCgpIHtcbiAgICAgICAgY29uc3QgdmlzaXRlZDogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgbGV0IG91dHB1dCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlczsgKytpKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSB0aGlzLnZlcnRleExpc3RbaV0gKyBcIiAtPiBcIjtcbiAgICAgICAgICAgIHZpc2l0ZWQucHVzaCh0aGlzLnZlcnRleExpc3RbaV0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnZlcnRpY2VzOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGpbaV1bal0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkaltpXVtqXSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmlzaXRlZC5pbmRleE9mKHRoaXMudmVydGV4TGlzdFs8bnVtYmVyPnRoaXMuYWRqW2ldW2pdXSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgKz0gdGhpcy52ZXJ0ZXhMaXN0W2pdICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuICAgICAgICAgICAgdmlzaXRlZC5wb3AoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyDmt7HluqbkvJjlhYjmkJzntKJcbiAgICBkZnModjogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG1hcmtlZCA9IEFycmF5KHRoaXMudmVydGljZXMpLmZpbGwoZmFsc2UpO1xuICAgICAgICBjb25zdCB7YWRqfSA9IHRoaXM7XG4gICAgICAgIHN0ZXAodik7XG5cbiAgICAgICAgZnVuY3Rpb24gc3RlcCh2OiBudW1iZXIpIHtcbiAgICAgICAgICAgIG1hcmtlZFt2XSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoYWRqW3ZdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiuv+mXruS6humhtueCuVwiICsgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGpbdl0uZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2ICE9PSBcIlwiICYmICFtYXJrZWRbdl0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOW5v+W6puS8mOWFiOaQnOe0olxuICAgIGJmcyhzOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgZWRnZVRvOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICBjb25zdCBxdWV1ZTogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgY29uc3QgbWFya2VkID0gQXJyYXkodGhpcy52ZXJ0aWNlcykuZmlsbChmYWxzZSk7XG4gICAgICAgIG1hcmtlZFtzXSA9IHRydWU7XG4gICAgICAgIHF1ZXVlLnB1c2gocyk7XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHcgPSBxdWV1ZS5zaGlmdCgpITtcbiAgICAgICAgICAgIGlmICh3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiuv+mXruS6huiKgueCuSBcIiArIHcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGpbd10uZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2ICE9PSBcIlwiICYmICFtYXJrZWRbdl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codiwgdyk7XG4gICAgICAgICAgICAgICAgICAgIGVkZ2VUb1t2XSA9IHc7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlZFt2XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2godik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coZWRnZVRvKTtcbiAgICAgICAgcmV0dXJuIHtlZGdlVG8sIG1hcmtlZH07XG4gICAgfTtcblxuICAgIC8vIOacgOefrei3r+W+hFxuICAgIHBhdGhUbyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgICAgICAvLyDlpoLmnpzmmK9zdGFydOW8gOWni+eahOmhtueCuSDov5Tlm57nmoRlZGdlVG9bc3RhcnRd5LiA5a6a562J5LqOdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHttYXJrZWQsIGVkZ2VUb30gPSB0aGlzLmJmcyhzdGFydCk7XG5cbiAgICAgICAgaWYgKCFtYXJrZWRbZW5kXSkgeyAvLyDpgb/lhY3opoHliLDovr7nmoTpobbngrnlhbblrp7lubbmsqHmnInov57mjqVcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xuICAgICAgICAvLyDkuIDml6bot6/lvoTliLDovr5zdGFydCDor7TmmI7lt7Lnu4/lrozmiJDljbPlgZzmraLlvqrnjq9cbiAgICAgICAgZm9yIChsZXQgaSA9IGVuZDsgaSAhPSBzdGFydDsgaSA9IGVkZ2VUb1tpXSkge1xuICAgICAgICAgICAgcGF0aC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHBhdGgucHVzaChzdGFydCk7XG4gICAgICAgIHJldHVybiBwYXRoLnJldmVyc2UoKTtcbiAgICB9O1xuXG4gICAgLy8g5ouT5omR5o6S5bqPXG4gICAgdG9wU29ydCgpIHtcbiAgICAgICAgY29uc3Qgc3RhY2s6IChmYWxzZSB8IG51bWJlcilbXSA9IFtdO1xuICAgICAgICBjb25zdCB2aXNpdGVkOiBib29sZWFuW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzOyBpKyspIHtcbiAgICAgICAgICAgIHZpc2l0ZWRbaV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF2aXNpdGVkW2ldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3BTb3J0SGVscGVyKGksIHZpc2l0ZWQsIHN0YWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3RhY2tbaV0gIT09IHVuZGVmaW5lZCAmJiBzdGFja1tpXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZlcnRleExpc3RbPG51bWJlcj5zdGFja1tpXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRvcFNvcnRIZWxwZXIodjogbnVtYmVyLCB2aXNpdGVkOiBib29sZWFuW10sIHN0YWNrOmFueVtdKSB7XG4gICAgICAgIHZpc2l0ZWRbdl0gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuYWRqW3ZdLmZvckVhY2goKHYsIGksIGEpID0+IHtcbiAgICAgICAgICAgIC8vIOWvueS6juavj+S4qumhtueCueeahOmihuaOpemhtueCuSDlpoLmnpzku5blt7Lnu4/msqHmnInlhbbku5bpobbngrnliJnmjqjlhaXmoIjkuK1cbiAgICAgICAgICAgIGlmICh2ICE9PSBcIlwiICYmICF2aXNpdGVkW3ZdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3BTb3J0SGVscGVyLmNhbGwodGhpcywgdiwgdmlzaXRlZCwgc3RhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3RhY2sucHVzaCh2KTtcbiAgICB9O1xuXG59XG5cblxuY29uc3QgZyA9IG5ldyBHcmFwaCg2KTtcbmcuYWRkRWRnZSgxLCAyKTtcbmcuYWRkRWRnZSgyLCA1KTtcbmcuYWRkRWRnZSgxLCAzKTtcbmcuYWRkRWRnZSgyLCA0KTtcbmcuYWRkRWRnZSgwLCAxKTtcbmcudmVydGV4TGlzdCA9IFtcIkNTMVwiLCBcIkNTMlwiLCBcIkRhdGEgU3RydWN0dXJlc1wiLFxuICAgIFwiQXNzZW1ibHkgTGFuZ3VhZ2VcIiwgXCJPcGVyYXRpbmcgU3lzdGVtc1wiLFxuICAgIFwiQWxnb3JpdGhtc1wiXTtcbmcuc2hvd0dyYXBoKCk7XG5jb25zb2xlLmxvZyhcIuaLk+aJkeaOkuW6j1wiKTtcbmcudG9wU29ydCgpO1xuXG5leHBvcnQge31cbiJdfQ==