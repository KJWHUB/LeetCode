/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const map = new Map()

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.get(s[i]).push(i)
        } else {
            map.set(s[i], [i])
        }
    }

    for (const [_key , value] of map) {
        if (value.length === 1) {
            return value[0]
        } 
    }
    
    return -1
};