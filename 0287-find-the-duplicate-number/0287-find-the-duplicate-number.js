/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
    const visited = new Set()

    for (const n of nums) {
        if (visited.has(n)) {
            return n
        }

        visited.add(n)
    }
};