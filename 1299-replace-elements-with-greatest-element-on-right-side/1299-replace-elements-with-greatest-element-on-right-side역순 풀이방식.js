/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
    let rightSideMax = Math.max(...arr)

    for(let i = 0; i < arr.length - 1; i++) {
        if (rightSideMax === arr[i]) {
            rightSideMax = Math.max(...arr.slice(i + 1))
        }

        arr[i] = rightSideMax
    }

    arr[arr.length - 1] = -1

    return arr
};