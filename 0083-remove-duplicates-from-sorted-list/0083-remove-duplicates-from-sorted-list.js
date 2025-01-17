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
const deleteDuplicates = function (head) {
    const values = new Set()

    let prev = null
    let current = head
    while (current) {
        if (values.has(current.val)) {
            prev.next = current.next
        } else {
            values.add(current.val)
            prev = current
        }
        current = current.next
    }

    return head
};