/**
 * @param {number[]} nums
 * @return {number}
 */
const minIncrementForUnique = function(nums) {
    nums.sort((a, b) => a - b)
    
    
    return nums.reduce((sum, curr, i) => {
        const next = nums[i + 1]

        if (curr >= next) {
            nums[i + 1] = curr + 1 
            return sum + (curr + 1 - next)
        }

        return sum

    }, 0)    

};