/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    if (!head.next) {
        return true
    }

    const arr = []
    let current = head
    let size = 1

    while(current) {
        arr.push(current.val)
        current = current.next
        size++
    }

    const count = Math.floor(arr.length / 2)

    for(let i = 0; i < count; i++) {
        const start = arr.shift()
        const end = arr.pop()

        if (start !== end) {
            return false
        }
    }

    return true
};