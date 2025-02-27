/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
    const inorderToBST = (beg, end) => {
        if (beg > end) return null

        const mid = Math.ceil((beg + end) / 2)

        const root = new TreeNode(nums[mid])

        root.left = inorderToBST(beg, mid - 1)
        root.right = inorderToBST(mid + 1, end)
        
        return root
    }

    return inorderToBST(0, nums.length - 1)
};