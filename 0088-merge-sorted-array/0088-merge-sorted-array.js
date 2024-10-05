/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {

    if (n === 0) return

    for(let i = 0; i < n; i++) {
        nums1.push(nums2[i])
    }

    nums1.sort((a,b) => a - b)
    nums1.splice(0, nums1.findIndex((el) => el > 0))
    
};