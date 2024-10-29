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
    let slow = head, fast = head;
    let prev = null, temp = null;

    // 연결 리스트의 중간을 찾고, 첫 절반을 반전함
    // `slow`는 한 번에 한 칸, `fast`는 한 번에 두 칸 이동
    // `fast`가 끝에 도달하면 `slow`는 중간에 위치하게 됨
    while (fast && fast.next) {
        fast = fast.next.next;      // `fast` 포인터를 두 칸 이동
        temp = slow.next;            // `slow.next`를 임시로 저장
        slow.next = prev;            // `slow` 포인터의 링크를 이전 노드로 반전
        prev = slow;                 // `prev`를 `slow`가 있던 위치로 이동
        slow = temp;                 // `slow`를 다음 노드(`temp`)로 이동
    }

    // 현재 상태:
    // - `prev`는 반전된 리스트의 첫 번째 절반을 가리킴
    // - `slow`는 리스트의 중간에 위치하며, 짝수 길이일 경우 두 번째 절반의 시작, 홀수 길이일 경우 중간 노드임
    // - `fast`는 리스트가 짝수 길이면 null, 홀수 길이면 마지막 노드를 가리킴

    // 리스트가 홀수 길이일 경우 중간 노드를 건너뛰기 위해 `slow`를 한 칸 이동
    let secondHalf = fast ? slow.next : slow; // `fast`가 null이 아니면 중간 노드를 건너뜀
    let firstHalf = prev; // `prev`는 반전된 첫 번째 절반을 가리킴

    // 두 절반을 비교
    while (secondHalf) { // 두 번째 절반을 순회
        if (firstHalf.val !== secondHalf.val) return false; // 값이 일치하지 않으면 팰린드롬이 아님
        firstHalf = firstHalf.next; // `firstHalf`를 다음 노드로 이동
        secondHalf = secondHalf.next; // `secondHalf`를 다음 노드로 이동
    }

    return true; // 모든 노드가 일치하면 팰린드롬이므로 true 반환
};