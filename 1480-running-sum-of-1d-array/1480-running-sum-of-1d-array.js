/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    let total = nums[0]
    const arr = [nums[0]]

    for(let i = 1; i < nums.length; i++) {
        total += nums[i]
        arr.push(total)
    }

    return arr
};