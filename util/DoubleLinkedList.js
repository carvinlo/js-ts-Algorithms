"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 双向链表
 * */
class DoubleLinkedListNode {
    constructor(val) {
        this.prev = null;
        this.next = null;
        this.child = null;
        this.val = val;
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
exports.DoubleLinkedListNode = DoubleLinkedListNode;
/**
 * @param arr 链表内容
 * */
function createDoubleLinkedList(arr) {
    const head = new DoubleLinkedListNode(arr[0]);
    let currentNode = head;
    let lastNode = null;
    for (let i = 0; i < arr.length; i++) {
        currentNode.next = arr[i + 1] == null ? null : new DoubleLinkedListNode(arr[i + 1]);
        currentNode.prev = lastNode;
        if (currentNode.next == null)
            break;
        lastNode = currentNode;
        currentNode = currentNode.next;
    }
    return head;
}
exports.createDoubleLinkedList = createDoubleLinkedList;
const assert_1 = __importDefault(require("assert"));
{
    const sample = [1, 2, 3];
    const doubleLinkedList = createDoubleLinkedList(sample);
    assert_1.default.strictEqual(doubleLinkedList.val, 1);
    assert_1.default.strictEqual(doubleLinkedList.prev, null);
    assert_1.default.strictEqual(doubleLinkedList.next.val, 2);
    assert_1.default.strictEqual(doubleLinkedList.next.prev.val, 1);
    assert_1.default.strictEqual(doubleLinkedList.next.next.val, 3);
    assert_1.default.strictEqual(doubleLinkedList.next.next.next, null);
    assert_1.default.strictEqual(doubleLinkedList.next.next.prev.val, 2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG91YmxlTGlua2VkTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidXRpbC9Eb3VibGVMaW5rZWRMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0tBRUs7QUFDTCxNQUFNLG9CQUFvQjtJQU10QixZQUFZLEdBQU07UUFKbEIsU0FBSSxHQUFtQyxJQUFJLENBQUM7UUFDNUMsU0FBSSxHQUFtQyxJQUFJLENBQUM7UUFDNUMsVUFBSyxHQUFtQyxJQUFJLENBQUM7UUFHekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLEdBQW1DLElBQUksQ0FBQztRQUNoRCxPQUFPLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQXFCK0Isb0RBQW9CO0FBbkJwRDs7S0FFSztBQUNMLFNBQVMsc0JBQXNCLENBQUksR0FBUTtJQUN2QyxNQUFNLElBQUksR0FBRyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztJQUN2QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsV0FBVyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixXQUFXLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUM1QixJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksSUFBSTtZQUFFLE1BQU07UUFFcEMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUN2QixXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztLQUNsQztJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFTyx3REFBc0I7QUFFOUIsb0RBQTRCO0FBRTVCO0lBQ0ksTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xELGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUssQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUssQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUssQ0FBQyxJQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUssQ0FBQyxJQUFLLENBQUMsSUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNqRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlj4zlkJHpk77ooahcclxuICogKi9cclxuY2xhc3MgRG91YmxlTGlua2VkTGlzdE5vZGU8VCA9IGFueT4ge1xyXG4gICAgdmFsOiBUO1xyXG4gICAgcHJldjogbnVsbCB8IERvdWJsZUxpbmtlZExpc3ROb2RlPFQ+ID0gbnVsbDtcclxuICAgIG5leHQ6IG51bGwgfCBEb3VibGVMaW5rZWRMaXN0Tm9kZTxUPiA9IG51bGw7XHJcbiAgICBjaGlsZDogbnVsbCB8IERvdWJsZUxpbmtlZExpc3ROb2RlPFQ+ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWw6IFQpIHtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgbm9kZTogRG91YmxlTGlua2VkTGlzdE5vZGU8VD4gfCBudWxsID0gdGhpcztcclxuICAgICAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUudmFsKTtcclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdG9BcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGFyciDpk77ooajlhoXlrrlcclxuICogKi9cclxuZnVuY3Rpb24gY3JlYXRlRG91YmxlTGlua2VkTGlzdDxUPihhcnI6IFRbXSkge1xyXG4gICAgY29uc3QgaGVhZCA9IG5ldyBEb3VibGVMaW5rZWRMaXN0Tm9kZShhcnJbMF0pO1xyXG4gICAgbGV0IGN1cnJlbnROb2RlID0gaGVhZDtcclxuICAgIGxldCBsYXN0Tm9kZSA9IG51bGw7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGN1cnJlbnROb2RlLm5leHQgPSBhcnJbaSArIDFdID09IG51bGwgPyBudWxsIDogbmV3IERvdWJsZUxpbmtlZExpc3ROb2RlKGFycltpICsgMV0pO1xyXG4gICAgICAgIGN1cnJlbnROb2RlLnByZXYgPSBsYXN0Tm9kZTtcclxuICAgICAgICBpZiAoY3VycmVudE5vZGUubmV4dCA9PSBudWxsKSBicmVhaztcclxuXHJcbiAgICAgICAgbGFzdE5vZGUgPSBjdXJyZW50Tm9kZTtcclxuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhlYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlRG91YmxlTGlua2VkTGlzdCwgRG91YmxlTGlua2VkTGlzdE5vZGV9O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG57XHJcbiAgICBjb25zdCBzYW1wbGUgPSBbMSwgMiwgM107XHJcbiAgICBjb25zdCBkb3VibGVMaW5rZWRMaXN0ID0gY3JlYXRlRG91YmxlTGlua2VkTGlzdChzYW1wbGUpO1xyXG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGRvdWJsZUxpbmtlZExpc3QudmFsLCAxKTtcclxuICAgIGFzc2VydC5zdHJpY3RFcXVhbChkb3VibGVMaW5rZWRMaXN0LnByZXYsIG51bGwpO1xyXG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGRvdWJsZUxpbmtlZExpc3QubmV4dCEudmFsLCAyKTtcclxuICAgIGFzc2VydC5zdHJpY3RFcXVhbChkb3VibGVMaW5rZWRMaXN0Lm5leHQhLnByZXYhLnZhbCwgMSk7XHJcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwoZG91YmxlTGlua2VkTGlzdC5uZXh0IS5uZXh0IS52YWwsIDMpO1xyXG4gICAgYXNzZXJ0LnN0cmljdEVxdWFsKGRvdWJsZUxpbmtlZExpc3QubmV4dCEubmV4dCEubmV4dCwgbnVsbCk7XHJcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwoZG91YmxlTGlua2VkTGlzdC5uZXh0IS5uZXh0IS5wcmV2IS52YWwsIDIpO1xyXG59XHJcbiJdfQ==