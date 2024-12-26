/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
const connect = function (root) {
    if (!root) return root

    let queue = [root];

    while (queue.length) {
        const nextQueue = []

        // depth check
        while (queue.length) {
            const node = queue.shift();

            if (queue[0]) {
                node.next = queue[0];
            }
            
            // 완전이진트리 이기 때문에 left 가 존재 한다면 right 도 무조건 존재하기 때문에 right 검증을 거치지 않는다.
            if (node.left) {
                nextQueue.push(node.left);
                nextQueue.push(node.right);
            }

        }

        queue = nextQueue

    }

    return root;
};