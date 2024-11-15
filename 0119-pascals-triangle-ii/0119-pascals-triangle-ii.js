/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
    let arr = [1]

    for (let i = 1; i < rowIndex + 1; i++) {
        const temp = []

        for(let j = 0; j < i + 1; j++) {
            const left = arr[j - 1]
            const right = arr[j]

            if (!left) {
                temp.push(right)
            } else if (!right) {
                temp.push(left)
            } else {
                temp.push(left + right)
            }
        }

        arr = temp
    }

    return arr
};