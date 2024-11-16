/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    return s.trim().split(' ').filter((el) => el).reverse().join(' ')
};