/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {

    const getSum = (nums) => nums.reduce((sum, n) => sum + n, 0)

    return accounts.reduce((acc, curr) => {
        const total = getSum(curr)

        if (total > acc) {
            return total
        }

        return acc
    }, 0)
};