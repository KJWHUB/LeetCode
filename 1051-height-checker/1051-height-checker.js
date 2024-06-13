/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
    return [...heights].sort((a, b) => a - b).filter((el, i) => el !== heights[i]).length
};