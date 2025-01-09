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
const isValidBST = function(root, prev) {
    const vaild = (node, min, max) => {
        if (!node) return true

        if (!(node.val > min && node.val < max)) return false

        return vaild(node.left, min, node.val) && vaild(node.right, node.val, max)
    }

    return vaild(root, -Infinity, Infinity)
};