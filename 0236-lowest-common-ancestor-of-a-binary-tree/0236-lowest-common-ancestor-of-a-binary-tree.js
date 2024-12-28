/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
    // 참조 비교 root === p
    if (!root || root === p || root === q) return root;
    const resL = lowestCommonAncestor(root.left, p, q);
    const resR = lowestCommonAncestor(root.right, p, q);
    return (resL && resR) ? root : (resL || resR);
};