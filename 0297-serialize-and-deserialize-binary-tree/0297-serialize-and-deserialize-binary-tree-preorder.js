/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
    const pre = []

    // 전위 순회
    const preorder = (node) => {
        if (!node) {
            pre.push('N')
            return
        }
        pre.push(String(node.val))
        preorder(node.left)
        preorder(node.right)
    }

    preorder(root)

    return pre.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
    const pre = data.split(',')
    let i = 0
    const buildTree = () => {
        if (pre[i] === 'N') {
            i++
            return null
        }
        const node = new TreeNode(Number(pre[i]))
        i++
        node.left = buildTree()
        node.right = buildTree()
        return node
    }
    return buildTree()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */