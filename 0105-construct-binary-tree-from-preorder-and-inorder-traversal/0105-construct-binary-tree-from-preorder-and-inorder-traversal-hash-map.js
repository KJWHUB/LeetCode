/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function(preorder, inorder) {
    // hash setup
    const hash = new Map(inorder.map((val, i) => [val, i]))

    const rec = (start, end) => {
        if (start > end) return null

        const val = preorder.shift()
        const root = new TreeNode(val)
        root.left = rec(start, hash.get(val) - 1)
        root.right = rec(hash.get(val) + 1, end)

        return root
    }

    return rec(0, preorder.length - 1)
};