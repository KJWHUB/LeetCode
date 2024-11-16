/**
 * @param {string} str
 * @return {string}
 */
const reverseWords = function(str) {
    const reverse = (s) => {
        let temp = ''

        for (let i = s.length - 1; i >= 0; i--) {
            temp += s[i]
        }

        return temp
    }
    return str.split(' ').map(reverse).join(' ')
};