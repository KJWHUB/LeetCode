/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const hash = {}

    for(let i = 0; i < nums.length; i++) {
        const el = nums[i]
        if (hash[el]) {
            hash[el]++
        } else {
            hash[el] = 1
        }
    }

    return Number(Object.entries(hash).find(([_key, count]) => count === 1)[0])
};