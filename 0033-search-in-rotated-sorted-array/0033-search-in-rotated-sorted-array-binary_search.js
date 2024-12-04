/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const midIndex = Math.floor((left + right) / 2)

        if (nums[midIndex] === target) {
            return midIndex
        } else if (nums[midIndex] >= nums[left]) {
            if (nums[left] <= target && target <= nums[midIndex]) {
                right = midIndex - 1;
            } else {
                left = midIndex + 1;
            }
        } else {
            if (nums[midIndex] <= target && target <= nums[right]) {
                left = midIndex + 1;
            } else {
                right = midIndex - 1;
            }
        }
    }

    return -1
};