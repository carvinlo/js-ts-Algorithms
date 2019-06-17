"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    toString() {
        const result = [];
        let node = this;
        while (node != null) {
            result.push(node.val);
            node = node.next;
        }
        return result;
    }
    toArray() {
        return this.toString();
    }
}
exports.ListNode = ListNode;
/**
 * @param arr 链表内容
 * @param cyclePosition 链表尾部连接的节点(索引从0开始)(成环)
 * */
function createLinkedList(arr, cyclePosition = -1) {
    const head = new ListNode(arr[0]);
    let currentNode = head;
    let cycleNode = cyclePosition === 0 ? head : null;
    for (let i = 1; i < arr.length; i++) {
        currentNode.next = new ListNode(arr[i]);
        currentNode = currentNode.next;
        if (i === cyclePosition)
            cycleNode = currentNode;
    }
    if (!(cyclePosition === -1 || cycleNode == null)) {
        currentNode.next = cycleNode;
    }
    return head;
}
exports.createLinkedList = createLinkedList;
const assert_1 = __importDefault(require("assert"));
{
    const sample = [1, 2];
    const linkedList = createLinkedList(sample);
    assert_1.default.strictEqual(linkedList.val, 1);
    assert_1.default.strictEqual(linkedList.next.val, 2);
    assert_1.default.strictEqual(linkedList.next.next, null);
}
{
    const sample = [1];
    const linkedList = createLinkedList(sample, 0);
    assert_1.default.strictEqual(linkedList.val, 1);
    assert_1.default.strictEqual(linkedList.next.val, 1);
}
{
    const sample = [1, 2];
    const linkedList = createLinkedList(sample, 0);
    assert_1.default.strictEqual(linkedList.val, 1);
    assert_1.default.strictEqual(linkedList.next.val, 2);
    assert_1.default.strictEqual(linkedList.next.next.val, 1);
    assert_1.default.strictEqual(linkedList.next.next.next.val, 2);
}
{
    const sample = [1, 2, 3];
    const linkedList = createLinkedList(sample, 1);
    assert_1.default.strictEqual(linkedList.val, 1);
    assert_1.default.strictEqual(linkedList.next.val, 2);
    assert_1.default.strictEqual(linkedList.next.next.val, 3);
    assert_1.default.strictEqual(linkedList.next.next.next.val, 2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua2VkTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidXRpbC9MaW5rZWRMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxRQUFRO0lBSVYsWUFBWSxHQUFNO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksR0FBdUIsSUFBSSxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxJQUFJLElBQUksRUFBRTtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxPQUFPO1FBQ0gsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDMUIsQ0FBQztDQUNKO0FBdUJHLDRCQUFRO0FBckJaOzs7S0FHSztBQUNMLFNBQVMsZ0JBQWdCLENBQUksR0FBUSxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDckQsTUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLElBQUksU0FBUyxHQUFHLGFBQWEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssYUFBYTtZQUFFLFNBQVMsR0FBRyxXQUFXLENBQUM7S0FDcEQ7SUFDRCxJQUFJLENBQUMsQ0FBQyxhQUFhLEtBQUssQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQzlDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0tBQ2hDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUdHLDRDQUFnQjtBQUlwQixvREFBNEI7QUFFNUI7SUFDSSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixNQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ25EO0FBQ0Q7SUFDSSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLE1BQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQy9DO0FBQ0Q7SUFDSSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixNQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSyxDQUFDLElBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUssQ0FBQyxJQUFLLENBQUMsSUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUMzRDtBQUNEO0lBQ0ksTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFLLENBQUMsSUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSyxDQUFDLElBQUssQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzNEIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGlzdE5vZGU8VCA9IGFueT4ge1xuICAgIHZhbDogVDtcbiAgICBuZXh0OiBudWxsIHwgTGlzdE5vZGU8VD47XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWw6IFQpIHtcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgbm9kZTogTGlzdE5vZGU8VD4gfCBudWxsID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZS52YWwpO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHRvQXJyYXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKVxuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gYXJyIOmTvuihqOWGheWuuVxuICogQHBhcmFtIGN5Y2xlUG9zaXRpb24g6ZO+6KGo5bC+6YOo6L+e5o6l55qE6IqC54K5KOe0ouW8leS7jjDlvIDlp4spKOaIkOeOrylcbiAqICovXG5mdW5jdGlvbiBjcmVhdGVMaW5rZWRMaXN0PFQ+KGFycjogVFtdLCBjeWNsZVBvc2l0aW9uID0gLTEpIHtcbiAgICBjb25zdCBoZWFkID0gbmV3IExpc3ROb2RlKGFyclswXSk7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZDtcbiAgICBsZXQgY3ljbGVOb2RlID0gY3ljbGVQb3NpdGlvbiA9PT0gMCA/IGhlYWQgOiBudWxsO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBuZXcgTGlzdE5vZGUoYXJyW2ldKTtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuICAgICAgICBpZiAoaSA9PT0gY3ljbGVQb3NpdGlvbikgY3ljbGVOb2RlID0gY3VycmVudE5vZGU7XG4gICAgfVxuICAgIGlmICghKGN5Y2xlUG9zaXRpb24gPT09IC0xIHx8IGN5Y2xlTm9kZSA9PSBudWxsKSkge1xuICAgICAgICBjdXJyZW50Tm9kZS5uZXh0ID0gY3ljbGVOb2RlO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZDtcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVMaW5rZWRMaXN0LFxuICAgIExpc3ROb2RlLFxufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbntcbiAgICBjb25zdCBzYW1wbGUgPSBbMSwgMl07XG4gICAgY29uc3QgbGlua2VkTGlzdCA9IGNyZWF0ZUxpbmtlZExpc3Qoc2FtcGxlKTtcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwobGlua2VkTGlzdC52YWwsIDEpO1xuICAgIGFzc2VydC5zdHJpY3RFcXVhbChsaW5rZWRMaXN0Lm5leHQhLnZhbCwgMik7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGxpbmtlZExpc3QubmV4dCEubmV4dCwgbnVsbCk7XG59XG57XG4gICAgY29uc3Qgc2FtcGxlID0gWzFdO1xuICAgIGNvbnN0IGxpbmtlZExpc3QgPSBjcmVhdGVMaW5rZWRMaXN0KHNhbXBsZSwgMCk7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGxpbmtlZExpc3QudmFsLCAxKTtcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwobGlua2VkTGlzdC5uZXh0IS52YWwsIDEpO1xufVxue1xuICAgIGNvbnN0IHNhbXBsZSA9IFsxLCAyXTtcbiAgICBjb25zdCBsaW5rZWRMaXN0ID0gY3JlYXRlTGlua2VkTGlzdChzYW1wbGUsIDApO1xuICAgIGFzc2VydC5zdHJpY3RFcXVhbChsaW5rZWRMaXN0LnZhbCwgMSk7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGxpbmtlZExpc3QubmV4dCEudmFsLCAyKTtcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwobGlua2VkTGlzdC5uZXh0IS5uZXh0IS52YWwsIDEpO1xuICAgIGFzc2VydC5zdHJpY3RFcXVhbChsaW5rZWRMaXN0Lm5leHQhLm5leHQhLm5leHQhLnZhbCwgMik7XG59XG57XG4gICAgY29uc3Qgc2FtcGxlID0gWzEsIDIsIDNdO1xuICAgIGNvbnN0IGxpbmtlZExpc3QgPSBjcmVhdGVMaW5rZWRMaXN0KHNhbXBsZSwgMSk7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGxpbmtlZExpc3QudmFsLCAxKTtcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwobGlua2VkTGlzdC5uZXh0IS52YWwsIDIpO1xuICAgIGFzc2VydC5zdHJpY3RFcXVhbChsaW5rZWRMaXN0Lm5leHQhLm5leHQhLnZhbCwgMyk7XG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGxpbmtlZExpc3QubmV4dCEubmV4dCEubmV4dCEudmFsLCAyKTtcbn1cbiJdfQ==