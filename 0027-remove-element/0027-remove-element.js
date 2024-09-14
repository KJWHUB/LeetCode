/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    let deleteCount = 0
    return [...nums].reduce((acc, curr, i) => {
        if (curr === val) {
            nums.splice(i - deleteCount, 1)
            deleteCount++
            return acc
        }
        return ++acc
    }, 0)
};