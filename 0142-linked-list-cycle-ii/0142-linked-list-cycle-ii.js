/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head) {
    if (!head || !head.next) {
        return null
    }

    const arr = []

    let start = head

    while(start.next) {
        arr.push(start)
        start = start.next

        const findIndex = arr.indexOf(start)

        if (findIndex !== -1) {
            return arr[findIndex]
        }
    }

    return null
};