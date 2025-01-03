/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    if (!root) return []

    const answer = []
    const stack = [root]

    while (stack.length) {
        const node = stack.pop()

        answer.push(node.val)

        if (node.right) {
            stack.push(node.right)
        }

        if (node.left) {
            stack.push(node.left)
        }
    }

    return answer
};