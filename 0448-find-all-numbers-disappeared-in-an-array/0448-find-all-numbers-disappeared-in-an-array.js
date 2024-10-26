/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
    const hash = {}

    for(let i = 1; i <= nums.length; i++) {
        hash[i] = null
    }

    for(let i = 0; i < nums.length; i++) {
        const n = nums[i]
        delete hash[n]
    }

    return Object.keys(hash).map((s) => Number(s))
};