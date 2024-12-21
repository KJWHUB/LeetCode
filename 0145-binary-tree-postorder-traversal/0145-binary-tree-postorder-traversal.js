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
const postorderTraversal = function(root) {
    if (!root) return []

    const answer = []
    const stack = [root]

    while (stack.length) {
        const node = stack[stack.length - 1]

        if (node.left) {
            stack.push(node.left)
            node.left = null
        } else if (node.right) {
            stack.push(node.right)
            node.right = null
        } else {
            answer.push(stack.pop().val);
        }
    }

    return answer
};