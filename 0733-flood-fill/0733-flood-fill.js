/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, color) {
    const startColor = image[sr][sc]
    if (startColor === color) return image

    const visited = new Set()
    const rows = image.length
    const cols = image[0].length

    // top, bottom, left, right
    const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]

    const createKey = (r, c) => `${r},${c}`

    const isValidArea = (r, c) => r >= 0 && r < rows && c >= 0 && c < cols

    const bfs = (r, c) => {
        const key = createKey(r, c)
        // 이미 방문
        if (visited.has(key)) return

        // update
        image[r][c] = color
        visited.add(key)

        // direction bfs
        directions.forEach(([nr, nc]) => {
            const sumr = r + nr
            const sumc = c + nc
            if (isValidArea(sumr, sumc) && image[sumr][sumc] === startColor) {
                bfs(sumr, sumc)
            }
        })
    }

    bfs(sr, sc)

    return image
};