/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {

    const rows = matrix.length
    const cols = matrix[0].length

    let r = 0
    let c = cols - 1

    while (r <= rows - 1 && c >= 0) {
        const val = matrix[r][c]

        if (val > target) {
            c--
        } else if (val === target) {
            return true
        } else {
            r++
        }
    }

    return false
};