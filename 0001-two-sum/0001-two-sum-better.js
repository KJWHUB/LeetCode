/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++){
        const n = nums[i]
        const complement = target - n;

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(n, i)
    }

    return[]
};