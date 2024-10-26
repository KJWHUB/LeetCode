/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function(nums) {

    const isEven = (n) => n % 2 === 0

    return nums.sort((a, b) => isEven(a) ? -1 : 1)
};