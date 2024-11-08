/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {

    let answer = []

    function addRight() {
        answer = answer.concat(matrix.shift())

        if (matrix.length) {
            addDown()
        }
    }

    function addDown() {
        for(let i = 0; i < matrix.length; i++) {
            answer.push(matrix[i].pop())
        }

        if (matrix.length && matrix[0].length) {
            addLeft()
        }
    }

    function addLeft() {
        answer = answer.concat(matrix.pop().reverse())

        if (matrix.length) {
            addUp()
        }
    }

    function addUp() {
        for(let i = matrix.length - 1; i >= 0; i--) {
            answer.push(matrix[i].shift())
        }

        if (matrix.length && matrix[0].length) {
            addRight()
        }
    }

    addRight()

    return answer
};