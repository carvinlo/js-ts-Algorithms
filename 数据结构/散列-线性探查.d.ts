/**
 * 线性探测法隶属于一种更一般化的散列技术：开放寻址散列。
 * 当发生碰撞时，线性探测法检查散列表中的下一个位置是否为空。
 * 如果为空，就将数据存入该位置；如果不为空，则继续检查下一个位置，直到找到一个空的位置为止。
 * 该技术是基于这样一个事实：每个散列表都会有很多空的单元格，可以使用它们来存储数据。
 *
 * 如果数组的大小是待存储数据个数的 1.5 倍，那么使用开链法；
 * 如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法
 * */
export {};
