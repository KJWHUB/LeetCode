/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {

    const isDuplicated = (arr) => {
        const filter = arr.filter(Number)
        const set = new Set(filter)

        if (filter.length > set.size) {
            return true
        }

        return false
    }

    // 1. row
    for (let i = 0; i < board.length; i++) {
        const row = board[i]

        if (isDuplicated(row)) {
            return false
        }
    }

    // 2. col
    for (let i = 0; i < board.length; i++) {
        const col = board.map((row) => row[i])
        
        if (isDuplicated(col)) {
            return false
        }
    }

    // 3. gird
    for (let y = 0; y < board.length; y += 3) {
        for (let x = 0; x < board.length; x += 3) {
            let flatBox = []

            for (let i = 0; i < 3; i++) {
                flatBox = flatBox.concat(board[y + i].slice(x, x + 3))
            }

            if (isDuplicated(flatBox)) {
                return false
            }
        }
    }

    return true
};