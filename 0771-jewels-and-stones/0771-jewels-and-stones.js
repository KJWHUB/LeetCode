/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
    const map = new Map()

    const arr = [...jewels]

    arr.forEach((s) => {
        map.set(s, (map.get(s) || 0) + 1)
    })

    let total = 0

    for (let i = 0; i < stones.length; i++) {
        if (map.has(stones[i])) {
            total++
        }
    }


    return total
};