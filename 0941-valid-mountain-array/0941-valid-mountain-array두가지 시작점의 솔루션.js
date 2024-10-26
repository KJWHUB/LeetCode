/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false
    }

    const n = arr.length
    let i = 0
    let j = n - 1;

    while (i + 1 < n && arr[i] < arr[i + 1]) i++;
    while (j > 0 && arr[j - 1] > arr[j]) j--;


    return i > 0 && i == j && j < n - 1;
};