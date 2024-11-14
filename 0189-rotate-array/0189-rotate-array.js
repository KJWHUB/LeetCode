/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    if (k === nums.length) return

    const n = k < nums.length ? k : k % nums.length

    const arr = []

    for (let i = 0; i < nums.length; i++) {
        const sum = i + n
        const addIndex = sum < nums.length ? sum : sum - nums.length
        arr[addIndex] = nums[i]
    }

    arr.forEach((el, i) => {
        nums[i] = el
    })
};