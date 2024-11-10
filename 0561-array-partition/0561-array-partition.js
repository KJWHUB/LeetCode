/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b)

    let total = 0

    for (let i = 0; i < nums.length; i = i + 2) {
        total += nums[i]
    }

    return total
};