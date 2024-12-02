/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
    const rows = mat.length
    const cols = mat[0].length
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const isValidArea = (r, c) => r >= 0 && r < rows && c >= 0 && c < cols

    const q = []

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] === 0) {
                q.push([r, c, 0])
            } else {
                mat[r][c] = Infinity;
            }
        }
    }

    while (q.length) {
        const [r, c, count] = q.shift()

        if (mat[r][c] > count) {
            mat[r][c] = count
        }

        directions.forEach(([nr, nc]) => {
            const sumr = r + nr
            const sumc = c + nc

            if (isValidArea(sumr, sumc) && mat[sumr][sumc] === Infinity) {
                q.push([sumr, sumc, count + 1])
            }
        })
    }

    return mat
};