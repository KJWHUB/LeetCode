/**
 * @param {string} str
 * @return {number}
 */
const lengthOfLongestSubstring = function(str) {

    let sum = ''
    let longest = 0

    for (const s of str) {
        const findIndex = sum.indexOf(s)
        if (findIndex !== -1) {
            sum = sum.substring(findIndex + 1) + s
        } else {
            sum += s

            if (longest < sum.length) {
                longest = sum.length
            }
        }
    }

    return longest
};