/*
在实现递归函数之前，有两件重要的事情需要弄清楚:

递推关系： 一个问题的结果与其子问题的结果之间的关系。
基本情况: 不需要进一步的递归调用就可以直接计算答案的情况。 有时，基本案例也被称为 bottom cases，因为它们往往是问题被减少到最小规模的情况，也就是如果我们认为将问题划分为子问题是一种自上而下的方式的最下层。
一旦我们计算出以上两个元素，再想要实现一个递归函数，就只需要根据递推关系调用函数本身，直到其抵达基本情况。

为了解释以上几点，让我们来看一个经典的问题，帕斯卡三角（Pascal's Triangle）:

帕斯卡三角形是排列成三角形的一系列数字。 在帕斯卡三角形中，每一行的最左边和最右边的数字总是 1。 对于其余的每个数字都是前一行中直接位于它上面的两个数字之和。

递推关系
让我们从帕斯卡三角形内的递推关系开始。
首先，我们定义一个函数 f(i, j) f(i,j)，它将会返回帕斯卡三角形第 i 行、第 j 列的数字。

我们可以用下面的公式来表示这一递推关系：
f(i, j) = f(i - 1, j - 1) + f(i - 1, j)
f(i,j) = f(i−1,j−1) + f(i−1,j)



基本情况
可以看到，每行的最左边和最右边的数字是基本情况，在这个问题中，它总是等于 1。
因此，我们可以将基本情况定义如下:

f(i,j)=1 where j=1 or j=i



演示
正如我们所看到的，一旦我们定义了 递推关系 和 基本情况，递归函数的实现变得更加直观，特别是在我们用数学公式表示出这两个元素之后。
下面给出一个例子，展示我们如何用这个公式递归地计算 f(5, 3)f(5,3), 也就是 帕斯卡三角形第 5 行中的第 3 个数。

我们可以将 f(5, 3)f(5,3) 分解为 f(5, 3) = f(4, 2) + f(4, 3)f(5,3)=f(4,2)+f(4,3)，然后递归地调用 f(4, 2)f(4,2) 和 f(4, 3)f(4,3)：

对于调用的 f(4, 2)f(4,2)，我们可以进一步展开它，直到到达基本情况，正如下面所描述的：
f(4, 2) = f(3, 1) + f(3, 2) = f(3, 1) + (f(2, 1) + f(2, 2)) = 1 + (1 + 1) = 3
f(4,2)=f(3,1)+f(3,2)=f(3,1)+(f(2,1)+f(2,2))=1+(1+1)=3

对于调用的 f(4, 3)f(4,3)，类似地，我们可以将其分解为：
f(4, 3) = f(3, 2) + f(3, 3) = (f(2, 1) + f(2, 2)) + f(3, 3) = (1 + 1) + 1 = 3
f(4,3)=f(3,2)+f(3,3)=(f(2,1)+f(2,2))+f(3,3)=(1+1)+1=3

最后，我们结合上述子问题的结果：
f(5, 3) = f(4, 2) + f(4, 3) = 3 + 3 = 6
f(5,3)=f(4,2)+f(4,3)=3+3=6

* */

function solve(i, j) {
    if (i === 1) return 1;
    if (j === 1 || j === i) return 1;

    return solve(i - 1, j - 1) + solve(i - 1, j);
}

const assert = require("assert");
assert.strictEqual(solve(5, 3), 6);
