function numIslands(grid: string[][]): number {
    let count = 0
    const visited = new Set()
    const rows = grid.length
    const cols = grid[0].length

    const land = "1"

    const createKey = (r: number, c: number) => `${r},${c}`
    const isLand = (el: string) => el === "1"
    const isFirstVisited = (r: number, c: number) => isLand(grid[r][c]) && !visited.has(createKey(r, c))
    const isPointInside = (r: number, c: number) => r >= 0 && r < rows && c >= 0 && c < cols

    const directions = [
        [1, 0], // top
        [-1, 0], // bottom
        [0, 1], // right
        [0, -1], // left
    ];

    const bfs = (r: number, c: number) => {
        const q: [number, number][] = []
        visited.add(createKey(r, c))
        q.push([r, c])

        while (q.length > 0) {
            const [row ,col] = q.shift()

            for (const [dr, dc] of directions) {
                const nr = row + dr
                const nc = col + dc

                if (isPointInside(nr, nc) && isFirstVisited(nr, nc)) {
                    visited.add(createKey(nr, nc))
                    q.push([nr, nc])
                }
            }
        }
    }

    // run
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (isFirstVisited(r, c)) {
                count++
                bfs(r, c)
            }
        }
    }

    return count
};