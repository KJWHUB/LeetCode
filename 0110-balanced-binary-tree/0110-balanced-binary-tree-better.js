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
 * @return {boolean}
 */
const isBalanced = function (root) {
    if (!root) return true
    return !(heigth(root) === -1)
};

function heigth(node) {
    if (!node) return 0

    const leftH = heigth(node.left)
    if (leftH === -1) return -1
    const rightH = heigth(node.right)
    if (rightH === -1) return -1
    
    if (Math.abs(leftH - rightH) > 1) return -1

    return 1 + Math.max(leftH, rightH)
}