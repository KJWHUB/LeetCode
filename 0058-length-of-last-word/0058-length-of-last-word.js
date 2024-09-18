/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    const copy = s.trim()

    let count = 0

    for(let i = copy.length - 1; i >= 0; i--) {
        if (copy[i] === ' ') {
            break
        }
        count++
    }

    return count
};