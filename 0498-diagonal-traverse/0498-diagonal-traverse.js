/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = function(mat) {
    const xLength = mat[0].length
    const yLength = mat.length
    const total = xLength * yLength

    const answer = []

    let x = 0, y = 0
    let direction = true

    const isTop = () => y === 0
    const isBottom = () => y === (yLength - 1)
    const isLeft = () => x === 0
    const isRight = () => x === (xLength - 1)

    const actions = {
        up: () => y--,
        down: () => y++,
        right: () => x++,
        left: () => x--
    }
    const { up, down, right, left } = actions

    const pushItem = () => {
        answer.push(mat[y][x])
    }

    const toggleDirection = () => {
        direction = !direction
    }

    const addRight = () => {
        do {
            pushItem()
            
            if (isTop() && isRight()) {
                down()
                break
            } else if (isRight()) {
                down()
                break
            } else if (isTop()) {
                right()
                break
            } else {
                right()
                up()
            }
        } while (x < xLength)
        toggleDirection()
    }

    const addLeft = () => {
        do {
            pushItem()

            if (isBottom() && isLeft()) {
                right()
                break
            } else if (isLeft()) {
                down()
                break
            } else if (isBottom()) {
                right()
                break
            } else {
                left()
                down()
            }
        } while (y < yLength)
        toggleDirection()
    }

    while(answer.length < total) {
        direction ? addRight() : addLeft()
    }


    return answer
};