/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let start = 0
    let end = nums.length - 1

    while(start < end) {
        if (nums[start] === 0) {
            nums.splice(start, 1)
            nums.push(0)
            end--
        } else {
            start++
        }
    }
};