/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) return false

    const s = `${x}`
    const harf = s.length / 2

    return Number(s.substring(0, harf)) === Number(reverseString(s.substring(s.length % 2 === 0 ? harf : harf + 1)))
};

function reverseString(str) {
    return str.split("").reverse().join("");
}