/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
    const set = new Set()

    let a = headA
    while(a !== null) {
        set.add(a)
        a = a.next
    }

    let b = headB
    while(b !== null) {
        const prevSize = set.size
        set.add(b)
        const addAfterSize = set.size

        if (prevSize === addAfterSize) {
            return b
        }

        b = b.next
    }

    return null
};