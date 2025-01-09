/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class BSTIterator {
    private values = []
    private currentIndex = 0

    constructor(root: TreeNode | null) {
        const dfs = (node) => {
            if (node.left) dfs(node.left)
            this.values.push(node.val)
            if (node.right) dfs(node.right)
        }
        dfs(root)
    }

    next(): number {
        return this.values[this.currentIndex++]
    }

    hasNext(): boolean {
        return this.values.length > this.currentIndex
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */