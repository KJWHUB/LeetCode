/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    const res = []

    const backtrack = (open, close, str) => {
        if (open === close && open + close === n * 2) {
            res.push(str)
            return
        }

        if (open < n) backtrack(open + 1, close, str + "(")
        if (close < open) backtrack(open, close + 1, str + ")")
    }

    backtrack(0, 0, '')

    return res
};