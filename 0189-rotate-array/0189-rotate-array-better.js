/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    k %= nums.length;
    nums.unshift(...nums.splice(nums.length - k, k));
};