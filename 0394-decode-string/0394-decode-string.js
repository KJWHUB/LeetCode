/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
    const stack = [];
    let currStr = "";
    let currNum = 0;

    const isNumber = (char) => Number.isInteger(Number(char))

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (char === "[") {
            stack.push([currStr, currNum]);

            // reset
            currStr = "";
            currNum = 0;
        } else if (char === "]") {
            const [prevStr, prevNum] = stack.pop()
            currStr = prevStr + currStr.repeat(prevNum);
        } else if (isNumber(char)) {
            currNum = currNum * 10 + Number(char);
        } else {
            currStr += char;
        }
    }

    return currStr;
};