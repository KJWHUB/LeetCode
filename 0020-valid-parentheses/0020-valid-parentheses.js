/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const left = ['(', '{', '[',]

    const rightMap = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ])

    const isLeft = (str) => left.includes(str)

    if (s.length === 1 || !isLeft(s[0])) {
        return false
    }

    const stack = [s[0]]

    for (let i = 1; i < s.length; i++) {
        const last = stack[stack.length - 1]
        const curr = s[i]

        if (isLeft(curr)) {
            stack.push(curr)
        } else if (last === rightMap.get(curr)) {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length === 0
};