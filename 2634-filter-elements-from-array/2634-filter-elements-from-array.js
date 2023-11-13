/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
    const temp = []
    
    arr.forEach((el, i) => {
        if(fn(el, i)) temp.push(el)
    })
    
    return temp
};