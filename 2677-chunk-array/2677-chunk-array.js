/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function(arr, size) {
    if (arr.length === 0) return arr
    const temp = []
    const count = arr.length
    for (let i = 0; i < count; i++) {
        temp.push(arr.splice(0, size))
        if (arr.length === 0) break
    }
    
    return temp
};
