/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let prefix = strs[0]

    const chageMatchPrefix = (str) => {
        let s = ''

        for (let i = 0; i < str.length; i++) {
            if (prefix[i] !== str[i]) {
                break
            }

            s += str[i]
        }

        prefix = s
    }

    for (let i = 1; i < strs.length; i++) {
        const str = strs[i]

        if (str[0] !== prefix[0]) {
            return ''
        }

        chageMatchPrefix(str)
    }
    
    return prefix
};