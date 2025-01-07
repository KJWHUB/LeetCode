/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
const maxDepth = function(root) {
    if (!root) return 0

    let max = 0

    const topDown = (node, i) => {
        max = Math.max(max, i)

        node.children.forEach((childrenNode) => topDown(childrenNode, i + 1))
    }

    topDown(root, 1)

    return max 
};