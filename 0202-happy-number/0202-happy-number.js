/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const set = new Set()

    const sum = (num) => `${num}`.split('').reduce((acc, curr) => acc + (curr ** 2), 0)

    let res = n

    while (res !== 1) {
        const result = sum(res)

        if (set.has(result)) {
            return false
        }

        set.add(result)
        res = result
    }

    return true
};