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
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function(root) {
    const map = new Map()
    const stack = [root]

    while (stack.length > 0) {
        const node = stack.pop();
        const key = JSON.stringify(node)

        if (map.has(key)) {
            map.set(key, map.get(key) + 1)
        } else {
            map.set(key, 1)
        }

        // add
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }

    const answer = []

    for (let [key, value] of map) {
        if (value > 1) {
            answer.push(JSON.parse(key))
        }
    }

    return answer
};