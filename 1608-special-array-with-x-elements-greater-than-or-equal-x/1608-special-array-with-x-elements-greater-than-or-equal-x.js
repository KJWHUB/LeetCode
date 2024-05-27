/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function(nums) {
    let result = -1
    const hash = {}

    nums.forEach((n) => {
        if (hash[n]) {
            ++hash[n]
        } else {
            hash[n] = 1
        }
    })

    const hashList = Object.entries(hash).sort((a, b) => a[0] - b[0])

    // n 보다 많거나 같은 수의 총합
    const calculateTotal = (n) => {
        return hashList.reduce((acc, [key, value]) => {
            if (n <= key) {
                return acc + value
            }
            return acc
        }, 0)
    }


    for(let i = 0; i <= nums.length; i++) {
        const calculate = calculateTotal(i)

        if (calculate === i) {
            result = i
            break
        }
    }

    return result

};