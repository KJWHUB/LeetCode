/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {

    const total = new ListNode()
    let totalPrev = null
    let totalTail = total

    let list1 = l1
    let list2 = l2

    while (list1 || list2) {
        totalTail.next = new ListNode()

        if (list1?.val) {
            totalTail.val += list1.val
        }

        if (list2?.val) {
            totalTail.val += list2.val
        }

        if (totalTail.val > 9) {
            const remain = totalTail.val % 10
            const quotient = Math.floor(totalTail.val / 10)

            totalTail.val = remain
            totalTail.next.val += quotient
        }

        if (list1) {
            list1 = list1.next
        }

        if (list2) {
            list2 = list2.next
        }

        totalPrev = totalTail
        totalTail = totalTail.next
    }

    if (!totalPrev.next.val) {
        totalPrev.next = null
    }
    

    return total
};