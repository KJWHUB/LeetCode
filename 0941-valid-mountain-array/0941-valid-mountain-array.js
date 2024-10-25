/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false
    }

    let last = arr[0]
    let isIncrease = true
    const maxIndex = arr.indexOf(Math.max(...arr))

    if (maxIndex === arr.length - 1) {
        return false
    }

    const condition = (n) => {
        if (n === last) {
            return true
        }

        if (isIncrease && (n < last)) {
            return true
        }

        if (!isIncrease && (n > last)) {
            return true
        }
    }

    for(let i = 1; i < arr.length; i++) {

        const n = arr[i]

        if (condition(n)) {
            return false
        }

        last = n
        if (i === maxIndex) {
            isIncrease = false
        }
    }

    return true
};