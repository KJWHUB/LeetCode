/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    return n <= 3
        ? n
        : 2 * climbStairs(n - 2) + climbStairs(n - 3);
};