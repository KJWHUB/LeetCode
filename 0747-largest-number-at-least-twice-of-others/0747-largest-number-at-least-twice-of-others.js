/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function(nums) {
    let [max1, max1Index] = [0, null]
    let [max2, max2Index] = [0, null]

    const swap = () => {
        const tempMax = max1
        const tempIndex = max1Index
        max1 = max2
        max1Index = max2Index
        max2 = tempMax
        max2Index = tempIndex
    }

    for(let i = 0; i < nums.length; i++) {
        if (max2 < nums[i]) {
            max2 = nums[i]
            max2Index = i
        }

        if (max1 < max2) {
            swap()
        }
    }

    return (max1 / max2) >= 2 ? max1Index : -1
};