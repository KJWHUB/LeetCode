/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    if (!head) {
        return false
    }

    let left = head
    let right = head.next

    while(left !== right) {
        if (!right || !right.next) {
            return false
        }

        left = left.next
        right = right.next.next
    }

    return true
};