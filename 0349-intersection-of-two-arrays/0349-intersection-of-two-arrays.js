/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    const s1 = new Set(nums1)
    const s2 = new Set(nums2)
    const [highSizeSet, lowSizeSet] = s1.size < s2.size ? [s2, s1] : [s1, s2]

    const answer = []

    lowSizeSet.forEach((value) => {
        if (highSizeSet.has(value)) {
            answer.push(value)
        }
    })

    return answer
};