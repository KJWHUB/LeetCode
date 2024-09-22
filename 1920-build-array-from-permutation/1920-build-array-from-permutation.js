/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function(nums) {
    const copy = [...nums]
    return nums.map((_, i) => copy[i]).map((n) => copy[n])
};