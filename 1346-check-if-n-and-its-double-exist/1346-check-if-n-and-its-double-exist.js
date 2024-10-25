/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
    arr.sort((a, b) => a - b)

    const condition = (i, j) => i != j && arr[i] === 2 * arr[j]

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (condition(i, j)) {
                return true
            }
        }
    }

    return false
};