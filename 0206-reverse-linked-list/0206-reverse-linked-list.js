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
const reverseList = function(head) {
    if (!head) {
        return head
    }

    let reverse = new ListNode(head.val)

    let current = head
    while(current !== null && current.next !== null) {
        current = current.next
        reverse = new ListNode(current.val, reverse)
    }

    return reverse
};