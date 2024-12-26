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
 * @return {boolean}
 */
const isSymmetric = function (root) {
    if (!root) return false



    const search = (rootNode, type) => {
        const stack = [rootNode]
        let str = ''

        const isLeftFirst = type === 'left';

        while (stack.length) {
            const node = stack.pop()

            if (node) {
                str += node.val

                const processNodes = isLeftFirst
                    ? [node.right, node.left]
                    : [node.left, node.right];

                processNodes.forEach(n => stack.push(n));
            } else {
                str += '*'
            }



        }
        return str
    }

    const left = search(root.left, 'left')
    const right = search(root.right, 'right')

    return left === right
};