/**
 * @param {string} s
 * @return {number}
 */
const scoreOfString = function(s) {
    return s.split('').reduce((sum, curr, i) => {
        const next = s[i + 1]
        if (next) {
            return sum + Math.abs(curr.codePointAt() - next.codePointAt())
        }
        return sum
    }, 0)
};