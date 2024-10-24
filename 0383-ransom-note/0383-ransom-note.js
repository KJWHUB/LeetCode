/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const hash = new Map()

    for(let i = 0; i < ransomNote.length; i++) {
        const s = ransomNote[i]
       if (hash.has(s)) {
            hash.set(s, hash.get(s) + 1)
       } else {
            hash.set(s, 1)
       }
    }

    for(let i = 0; i < magazine.length; i++) {
        const s = magazine[i]

        if (hash.has(s)) {
            hash.set(s, hash.get(s) - 1)
        }
    }

    const values = hash.values()

    for(let i = 0; i < hash.size; i++) {
        const value = values.next().value
        if (value > 0) {
            return false
        }
    }

    

    return true
};