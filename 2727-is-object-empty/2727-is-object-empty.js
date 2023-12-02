/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function(obj) {
    return JSON.stringify(obj).length === 2
};