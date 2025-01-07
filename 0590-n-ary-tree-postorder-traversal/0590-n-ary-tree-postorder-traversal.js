/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
const postorder = function(root) {
    // left => right => root

    if (!root) return []

    const result = []

    const dfs = (node) => {
        node.children.forEach(dfs)
        result.push(node.val)
    }
    
    dfs(root)

    return result
};