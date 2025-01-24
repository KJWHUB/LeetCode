/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
    const res = []

    for (let i = 0; i < n; i++) {
        // x
        res.push(nums[i])
        // y
        res.push(nums[n + i])
    }

    return res
};