/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
    const temp = []
    arr.forEach((el, i) => temp.push(fn(el, i)))
    return temp
};