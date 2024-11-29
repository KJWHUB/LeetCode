/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
const cloneGraph = function (graph) {
    const map = new Map()
    
    function traverse(node) {
        if (!map.has(node.val)) {
            map.set(node.val, new Node(node.val))
            map.get(node.val).neighbors = node.neighbors.map(traverse)
        }
        return map.get(node.val)
    }
    
    return graph ? traverse(graph) : graph
}