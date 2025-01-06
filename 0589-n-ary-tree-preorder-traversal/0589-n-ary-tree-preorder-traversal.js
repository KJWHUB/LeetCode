/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
const preorder = function(root) {
    // root => left => right
    if (!root) return []

    const result = []

    const dfs = (node) => {
        result.push(node.val)

        node.children.forEach(dfs)
    }

    dfs(root)

    return result
};