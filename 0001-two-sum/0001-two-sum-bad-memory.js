/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (map.has(n)) {
            map.get(n).push(i)
        } else {
            map.set(n, [i])
        }
    }

    for (const [key, value] of map) {
        const find = target - key

        // 1. 같은 두개의 n
        if (find === key) {
            if (value.length > 1) {
                return value.slice(0, 2)
            } else {
                continue
            }
        // 2. 서로다른 두개의 n
        } else if (map.has(find)) {
            return [value[0], map.get(find)[0]]
        }
    }


    return []
};