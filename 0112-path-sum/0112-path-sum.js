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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
    if (!root) return false

    const isLeafNode = (node) => !node.left && !node.right

    const rec = (node, prevSum) => {
        const sum = node.val + prevSum
        if (isLeafNode(node)) {
            return sum === targetSum
        } else {
            const leftCheck = node.left ? rec(node.left, sum) : false
            const rightCheck = node.right ? rec(node.right, sum) : false

            return leftCheck || rightCheck
        }
    }

    return rec(root, 0)
};