/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
    if (!head) {
        return head
    }

    let prev = new ListNode(null, head)
    let current = head


    while(current !== null) {

        if (current.val === val) {
            prev.next = current.next
            if (prev.val === null) {
                head = head.next
            }
        } else {
            prev = current
        }

        current = current.next
    }

    if (!prev.val) {
        return null
    }



    return head
    
};