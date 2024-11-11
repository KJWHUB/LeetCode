/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let leftIndex = 0
    let rightIndex = numbers.length - 1

    const sum = () => numbers[leftIndex] + numbers[rightIndex]
    const isNotMatch = () => sum() !== target

    while (isNotMatch()) {
        if (sum() > target) {
            rightIndex--
        } else {
            leftIndex++
        }
    }

    return [leftIndex + 1, rightIndex + 1]
};