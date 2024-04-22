/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = function(arr1, arr2) {
    const arr = []

    arr1.forEach((el) => {
        arr[el.id] = el
    })
    arr2.forEach((el) => {
        const find = arr[el.id]
        find ? Object.assign(find, el) : arr[el.id] = el
    })

    return arr.filter((el) => el)
};