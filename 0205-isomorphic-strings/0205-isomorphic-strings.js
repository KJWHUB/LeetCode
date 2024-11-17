/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    const sMap = new Map()
    const tMap = new Map()

    const n = s.length

    for (let i = 0; i < n; i++) {
        // s
        if (sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) {
            return false
        } else {
            sMap.set(s[i], t[i])
        }

        // t
        if (tMap.has(t[i]) && tMap.get(t[i]) !== s[i]) {
            return false
        } else {
            tMap.set(t[i], s[i])
        }
    }

    return true
};