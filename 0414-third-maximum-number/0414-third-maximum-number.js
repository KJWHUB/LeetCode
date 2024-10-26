/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
    const set = [...new Set(nums)].sort((a, b) => b - a)
    
    if (set.length < 3) {
        return Math.max(...set)
    }

    return set[2]
};