/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function(c) {

    // my solution
    // for (let a = squareC; a >= 0; a--) {
    //     for (let b = squareC; b >= 0; b--) {
    //         if (a ** 2 + b ** 2 === c) {
    //             return true
    //         }
    //     }
    // }
    // return false

    let a = 0;
    let b = Math.floor(Math.sqrt(c));

    while (a <= b) {
        const sum = a ** 2 + b ** 2;

        if (sum === c) {
            return true;
        } else if (sum > c) {
            b--;
        } else {
            a++;
        }
    }
    return false;
};