/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function(head) {
    if (!head) {
        return head
    }

    let current = head
    const even = new ListNode()
    let evenTail = even

    while(current !== null && current.next !== null) {
        evenTail.next = new ListNode(current.next.val)
        evenTail = evenTail.next

        // double jump
        current.next = current.next.next

        if (!current.next) {
            current.next = even.next
            break
        }

        if (!current.next.next) {
            current.next.next = even.next
            break
        }

        // next
        current = current.next
    }

    return head
};