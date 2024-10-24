/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {

    let count = 0

    for(let i = 0; i < nums.length; i++) {
        count++
        
        const n = nums[i]
        let duplicateLastIndex = i        

        for(let j = i + 1; j < nums.length; j++) {
            const jN = nums[j]
            if (jN === n) {
                duplicateLastIndex = j
            } else {
                break
            }
        }

        nums.splice(i, duplicateLastIndex - i)
    }

    return count
};