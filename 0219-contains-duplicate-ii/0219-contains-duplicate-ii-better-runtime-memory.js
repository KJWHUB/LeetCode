/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
    const calculateMin = (arr) => {
        let min = Infinity
        let i = 0
        let next = i + 1

        while (next < arr.length) {
            const abs = Math.abs(arr[i] - arr[next])
            if (abs < min) {
                min = abs
            }

            i++
            next++
        }

        return min
    }

    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]

        if (map.has(n)) {
            map.get(n).push(i)
        } else {
            map.set(n, [i])
        }
    }

    for (const [_key, indexArr] of map) {
        if (indexArr.length < 2) {
            continue
        }

        if (calculateMin(indexArr) <= k) {
            return true
        }
    }

    return false
};