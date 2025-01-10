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
const insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val)

    const stack = [root]

    while (stack.length) {
        const node = stack.pop()

        if (node.val > val) {
            node.left ? stack.push(node.left) : node.left = new TreeNode(val)
        } else {
            node.right ? stack.push(node.right) : node.right = new TreeNode(val)
        }
    }

    return root
};