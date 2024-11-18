/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const [low, high] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1]

    const map = new Map()

    for (let i = 0; i < high.length; i++) {
        const n = high[i]
        if (map.has(n)) {
            map.set(n, map.get(n) + 1)
        } else {
            map.set(n, 1)
        }
    }

    const answer = []

    for (let i = 0; i < low.length; i++) {
        const n = low[i]
        if (map.get(n)) {
            map.set(n, map.get(n) - 1)
            answer.push(n)
        }
    }

    return answer
};