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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {

    if (root.val === val) {
        return root
    }

    let left = null
    let right = null

    if (root.left) {
        left = searchBST(root.left, val)
    }

    if (root.right) {
        right = searchBST(root.right, val)
    }

    return left ?? right
};