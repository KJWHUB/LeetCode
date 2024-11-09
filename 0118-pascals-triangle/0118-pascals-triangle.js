/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    const answer = [[1]]

    if (numRows > 1) {
        answer.push([1,1])
    }

    for (let i = 2; i < numRows; i++) {
        const last = answer[answer.length - 1]
        const temp = [1]
        for (let j = 0; j < last.length - 1; j++) {
            temp.push(last[j] + last[j + 1])
        }
        temp.push(1)

        answer.push(temp)
    }

    return answer
};