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

    let queue = [root]

    while (queue.length) {
        const nextQueue = []

        while (queue.length) {
            const node = queue.shift()

            if (queue[0]) {
                node.next = queue[0]
            }

            node.left && nextQueue.push(node.left)
            node.right && nextQueue.push(node.right)
        }

        queue = nextQueue
    }

    return root
};