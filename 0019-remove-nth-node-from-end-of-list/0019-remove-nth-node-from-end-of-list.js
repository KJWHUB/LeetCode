/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
    
    let prevRemove = head
    let remove = head
    let tail = head

    let size = 1

    while(tail !== null && tail.next !== null) {
        tail = tail.next
        size++

        if (size > n + 1) {
            prevRemove = prevRemove.next
        }

        if (size > n) {
            remove = remove.next
        }
    }

    // first
    if (prevRemove === remove) {
        return head.next
    }

    // delete
    prevRemove.next = remove.next

    return head
};