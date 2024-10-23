/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    const isFizz = (n) => n % 3 === 0
    const isBuzz = (n) => n % 5 === 0

    const calculate = (n) => {
        const fizz = isFizz(n)
        const buzz = isBuzz(n)

        if (fizz && buzz) {
            return "FizzBuzz"
        }

        if (fizz) {
            return "Fizz"
        }

        if (buzz) {
            return "Buzz"
        }

        return `${n}`
    }

    return Array(n).fill(0).map((_n, i) => calculate(i + 1))
};