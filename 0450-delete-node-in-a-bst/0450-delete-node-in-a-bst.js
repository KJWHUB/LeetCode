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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
    if (!root) return root

    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key)
    } else {
        if (!root.left) return root.right
        if (!root.right) return root.left

        let rightMin = root.right
        while (rightMin.left) {
            rightMin = rightMin.left
        }

        root.val = rightMin.val
        root.right = deleteNode(root.right, rightMin.val)
    }

    return root
}