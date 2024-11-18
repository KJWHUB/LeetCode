/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const map = {}

    strs.forEach((str) => {
        const arr = str.split('').sort()

        if (map[arr]) {
            map[arr].push(str)
        } else {
            map[arr] = [str]
        }
    })

    return Object.values(map)
};