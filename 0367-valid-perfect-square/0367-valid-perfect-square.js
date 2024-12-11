/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
    if (num < 1) return false

    let left = 1
    let right = num

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (mid * mid === num) return true

        if (mid * mid > num) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return false
};