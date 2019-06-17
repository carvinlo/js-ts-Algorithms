"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next
是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。
假设链表中的所有节点都是 0-index 的。

在链表类中实现这些功能：

get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，
则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。
deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 

示例：

MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3
 

提示：

所有值都在 [1, 1000] 之内。
操作次数将在  [1, 1000] 之内。
请不要使用内置的 LinkedList 库。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * Initialize your data structure here.
 */
class MyLinkedList {
    constructor() {
        /**
         * 没说不能用数组就不能怪我了
         * */
        this.data = [];
    }
    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
     * @param {number} index
     * @return {number}
     */
    get(index) {
        return this.data[index] == null ? -1 : this.data[index];
    }
    ;
    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.data.unshift(val);
    }
    ;
    /**
     * Append a node of value val to the last element of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.data.push(val);
    }
    ;
    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0)
            return this.addAtHead(val);
        if (index > this.data.length)
            return;
        this.data.splice(index, 0, val);
    }
    ;
    /**
     * Delete the index-th node in the linked list, if the index is valid.
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.data.length)
            return;
        this.data.splice(index, 1);
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzA3LuiuvuiuoemTvuihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzA3LuiuvuiuoemTvuihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1DSTtBQUNKOztHQUVHO0FBQ0gsTUFBTSxZQUFZO0lBQWxCO1FBQ0k7O2FBRUs7UUFDTCxTQUFJLEdBQWEsRUFBRSxDQUFDO0lBbUR4QixDQUFDO0lBakRHOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsS0FBYTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxHQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxHQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFBQSxDQUFDO0lBRUY7Ozs7O09BS0c7SUFDSCxVQUFVLENBQUMsS0FBYSxFQUFFLEdBQVc7UUFDakMsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztPQUlHO0lBQ0gsYUFBYSxDQUFDLEtBQWE7UUFDdkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQUEsQ0FBQztDQUVMIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu6K6+6K6h6ZO+6KGo55qE5a6e546w44CC5oKo5Y+v5Lul6YCJ5oup5L2/55So5Y2V6ZO+6KGo5oiW5Y+M6ZO+6KGo44CC5Y2V6ZO+6KGo5Lit55qE6IqC54K55bqU6K+l5YW35pyJ5Lik5Liq5bGe5oCn77yadmFswqDlkozCoG5leHTjgIJ2YWzCoOaYr+W9k+WJjeiKgueCueeahOWAvO+8jG5leHTCoFxyXG7mmK/mjIflkJHkuIvkuIDkuKroioLngrnnmoTmjIfpkogv5byV55So44CC5aaC5p6c6KaB5L2/55So5Y+M5ZCR6ZO+6KGo77yM5YiZ6L+Y6ZyA6KaB5LiA5Liq5bGe5oCnwqBwcmV2wqDku6XmjIfnpLrpk77ooajkuK3nmoTkuIrkuIDkuKroioLngrnjgIJcclxu5YGH6K6+6ZO+6KGo5Lit55qE5omA5pyJ6IqC54K56YO95pivIDAtaW5kZXgg55qE44CCXHJcblxyXG7lnKjpk77ooajnsbvkuK3lrp7njrDov5nkupvlip/og73vvJpcclxuXHJcbmdldChpbmRleCnvvJrojrflj5bpk77ooajkuK3nrKzCoGluZGV4wqDkuKroioLngrnnmoTlgLzjgILlpoLmnpzntKLlvJXml6DmlYjvvIzliJnov5Tlm54tMeOAglxyXG5hZGRBdEhlYWQodmFsKe+8muWcqOmTvuihqOeahOesrOS4gOS4quWFg+e0oOS5i+WJjea3u+WKoOS4gOS4quWAvOS4usKgdmFswqDnmoToioLngrnjgILmj5LlhaXlkI7vvIzmlrDoioLngrnlsIbmiJDkuLrpk77ooajnmoTnrKzkuIDkuKroioLngrnjgIJcclxuYWRkQXRUYWlsKHZhbCnvvJrlsIblgLzkuLrCoHZhbCDnmoToioLngrnov73liqDliLDpk77ooajnmoTmnIDlkI7kuIDkuKrlhYPntKDjgIJcclxuYWRkQXRJbmRleChpbmRleCx2YWwp77ya5Zyo6ZO+6KGo5Lit55qE56yswqBpbmRleMKg5Liq6IqC54K55LmL5YmN5re75Yqg5YC85Li6wqB2YWzCoCDnmoToioLngrnjgILlpoLmnpzCoGluZGV4wqDnrYnkuo7pk77ooajnmoTplb/luqbvvIxcclxu5YiZ6K+l6IqC54K55bCG6ZmE5Yqg5Yiw6ZO+6KGo55qE5pyr5bC+44CC5aaC5p6cIGluZGV4IOWkp+S6jumTvuihqOmVv+W6pu+8jOWImeS4jeS8muaPkuWFpeiKgueCueOAglxyXG5kZWxldGVBdEluZGV4KGluZGV4Ke+8muWmguaenOe0ouW8lcKgaW5kZXgg5pyJ5pWI77yM5YiZ5Yig6Zmk6ZO+6KGo5Lit55qE56yswqBpbmRleCDkuKroioLngrnjgIJcclxuwqBcclxuXHJcbuekuuS+i++8mlxyXG5cclxuTXlMaW5rZWRMaXN0IGxpbmtlZExpc3QgPSBuZXcgTXlMaW5rZWRMaXN0KCk7XHJcbmxpbmtlZExpc3QuYWRkQXRIZWFkKDEpO1xyXG5saW5rZWRMaXN0LmFkZEF0VGFpbCgzKTtcclxubGlua2VkTGlzdC5hZGRBdEluZGV4KDEsMik7ICAgLy/pk77ooajlj5jkuLoxLT4gMi0+IDNcclxubGlua2VkTGlzdC5nZXQoMSk7ICAgICAgICAgICAgLy/ov5Tlm54yXHJcbmxpbmtlZExpc3QuZGVsZXRlQXRJbmRleCgxKTsgIC8v546w5Zyo6ZO+6KGo5pivMS0+IDNcclxubGlua2VkTGlzdC5nZXQoMSk7ICAgICAgICAgICAgLy/ov5Tlm54zXHJcbsKgXHJcblxyXG7mj5DnpLrvvJpcclxuXHJcbuaJgOacieWAvOmDveWcqMKgWzEsIDEwMDBdwqDkuYvlhoXjgIJcclxu5pON5L2c5qyh5pWw5bCG5ZyowqDCoFsxLCAxMDAwXcKg5LmL5YaF44CCXHJcbuivt+S4jeimgeS9v+eUqOWGhee9rueahCBMaW5rZWRMaXN0IOW6k+OAglxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZGVzaWduLWxpbmtlZC1saXN0XHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIHlvdXIgZGF0YSBzdHJ1Y3R1cmUgaGVyZS5cclxuICovXHJcbmNsYXNzIE15TGlua2VkTGlzdCB7XHJcbiAgICAvKipcclxuICAgICAqIOayoeivtOS4jeiDveeUqOaVsOe7hOWwseS4jeiDveaAquaIkeS6hlxyXG4gICAgICogKi9cclxuICAgIGRhdGE6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIHRoZSBpbmRleC10aCBub2RlIGluIHRoZSBsaW5rZWQgbGlzdC4gSWYgdGhlIGluZGV4IGlzIGludmFsaWQsIHJldHVybiAtMS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbaW5kZXhdID09IG51bGwgPyAtMSA6IHRoaXMuZGF0YVtpbmRleF07XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgbm9kZSBvZiB2YWx1ZSB2YWwgYmVmb3JlIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZSBsaW5rZWQgbGlzdC4gQWZ0ZXIgdGhlIGluc2VydGlvbiwgdGhlIG5ldyBub2RlIHdpbGwgYmUgdGhlIGZpcnN0IG5vZGUgb2YgdGhlIGxpbmtlZCBsaXN0LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbFxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgYWRkQXRIZWFkKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnVuc2hpZnQodmFsKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBlbmQgYSBub2RlIG9mIHZhbHVlIHZhbCB0byB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBsaW5rZWQgbGlzdC5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWxcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGFkZEF0VGFpbCh2YWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHZhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgbm9kZSBvZiB2YWx1ZSB2YWwgYmVmb3JlIHRoZSBpbmRleC10aCBub2RlIGluIHRoZSBsaW5rZWQgbGlzdC4gSWYgaW5kZXggZXF1YWxzIHRvIHRoZSBsZW5ndGggb2YgbGlua2VkIGxpc3QsIHRoZSBub2RlIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGVuZCBvZiBsaW5rZWQgbGlzdC4gSWYgaW5kZXggaXMgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGgsIHRoZSBub2RlIHdpbGwgbm90IGJlIGluc2VydGVkLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBhZGRBdEluZGV4KGluZGV4OiBudW1iZXIsIHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHRoaXMuYWRkQXRIZWFkKHZhbCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy5kYXRhLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDAsIHZhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIHRoZSBpbmRleC10aCBub2RlIGluIHRoZSBsaW5rZWQgbGlzdCwgaWYgdGhlIGluZGV4IGlzIHZhbGlkLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBkZWxldGVBdEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuZGF0YS5sZW5ndGgpIHJldHVybjtcclxuICAgICAgICB0aGlzLmRhdGEuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH07XHJcblxyXG59XHJcblxyXG4vKipcclxuICogWW91ciBNeUxpbmtlZExpc3Qgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcclxuICogdmFyIG9iaiA9IG5ldyBNeUxpbmtlZExpc3QoKVxyXG4gKiB2YXIgcGFyYW1fMSA9IG9iai5nZXQoaW5kZXgpXHJcbiAqIG9iai5hZGRBdEhlYWQodmFsKVxyXG4gKiBvYmouYWRkQXRUYWlsKHZhbClcclxuICogb2JqLmFkZEF0SW5kZXgoaW5kZXgsdmFsKVxyXG4gKiBvYmouZGVsZXRlQXRJbmRleChpbmRleClcclxuICovXHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==