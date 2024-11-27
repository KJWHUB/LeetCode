/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
    const stack = []

    const calculateMap = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    }

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]

        if (Number.isInteger(Number(token))) {
            stack.push(Number(token))
        } else {
            const b = stack.pop()
            const a = stack.pop()
            const res = calculateMap[token](a, b)
            stack.push(res)
        }
    }

    return stack[0]
};