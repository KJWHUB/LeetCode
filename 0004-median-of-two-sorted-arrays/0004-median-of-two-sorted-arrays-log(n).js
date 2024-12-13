/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    const arr = nums1.concat(nums2).sort((a, b) => a -  b)
    return arr.length % 2 === 0 ? (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2 : arr[Math.floor(arr.length / 2)]
};