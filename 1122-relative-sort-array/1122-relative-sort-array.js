/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function(arr1, arr2) {
    arr2.forEach((n) => {
        arr1.splice(arr1.indexOf(n), 1)
    })

    arr1.sort((a, b) => a - b)

    arr1.forEach((el) => {
        if(arr2.includes(el)) {
            const findIndex = arr2.indexOf(el)
            arr2.splice(findIndex, 1, ...[el, el])
        } else {
            arr2.push(el)
        }
    })

    return arr2
};