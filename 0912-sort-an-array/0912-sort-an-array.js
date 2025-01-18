/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
    if (nums.length <= 1) return nums

    const mid = nums.length >> 1
    const left = sortArray(nums.slice(0, mid))
    const right = sortArray(nums.slice(mid))

    return merge(left, right)
};

function merge(left, right) {
    const res = []
    let i = 0, j = 0

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            res.push(left[i])
            i++
        } else {
            res.push(right[j])
            j++
        }
    }

    return [...res, ...left.slice(i), ...right.slice(j)]
}