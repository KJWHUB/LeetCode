/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {
    const hash = {}

    // hash setup
    for (let i = 0; i < inorder.length; i++) {
        // key: inorder[i], value: i
        hash[inorder[i]] = i
    }

    const rec = (start, end) => {
        if (start > end) return null

        const val = postorder.pop()
        const root = new TreeNode(val)
        root.right = rec(hash[val] + 1, end)
        root.left = rec(start, hash[val] - 1)

        return root
    }

    return rec(0, postorder.length - 1)
};