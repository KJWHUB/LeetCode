/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function(num) {
    // basic
    let count = 0

    while(num > 0) {
        // step
        count++
        // isEven
        if (num % 2 === 0) {
            num /= 2
        } else {
            num--
        }
    }

    return count
};