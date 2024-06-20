/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
const maxDistance = function(position, m) {
    position.sort((a, b) => a - b)

    const n = position.length
    

    let min = 1 // 최소
    let max = Math.floor((position[n - 1] - position[0]) / (m - 1)) // 최대

    let answer = 1

    while (min <= max) {
        let mid = min + Math.floor((max - min) / 2)
        
        if (canWePlace(position, mid, m)) {
            answer = mid;
            min = mid + 1;
        } else {
            max = mid - 1;
        }

    }

    return answer
};

function canWePlace(arr, dist, balls) {
    let countBalls = 1;
    let lastPlaced = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - lastPlaced >= dist) {
            countBalls++;
            lastPlaced = arr[i];
        }
        if (countBalls >= balls) {
            return true;
        }
    }
    return false;
}