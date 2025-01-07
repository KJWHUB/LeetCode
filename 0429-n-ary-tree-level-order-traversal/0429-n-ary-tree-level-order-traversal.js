/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    if (!root) return []

    const result = []

    const bfs = (queue) => {
        if (!queue.length) return

        const currentN = queue.length
        const currentResult = []
        let nextQueue = []

        for (let i = 0; i < currentN; i++) {
            const node = queue.shift()

            currentResult.push(node.val)
            nextQueue = nextQueue.concat(node.children)
        }

        result.push(currentResult)
        bfs(nextQueue)
    }

    bfs([root])

    return result
};