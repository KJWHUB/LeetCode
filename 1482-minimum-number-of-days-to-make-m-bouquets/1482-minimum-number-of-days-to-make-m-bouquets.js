/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minDays = function(bloomDay, m, k) {
    // impossible
    if (bloomDay.length < m * k) return -1

    let l = 1, r = 1000000000;
    let ans = -1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        let consecutiveLength = 0, bouquets = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= mid) {
                consecutiveLength++;
                if (consecutiveLength >= k) {
                    consecutiveLength = 0;
                    bouquets++;
                }
            } else {
                consecutiveLength = 0;
            }
        }
        if (bouquets >= m) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;

    



};
    // my time limt solution
    // const maxDay = Math.max(...bloomDay)
    // let minDay = -1

    // const calulateBloom = (n) => {
    //     let bloom = ''
    //     return bloomDay.reduce((sum, curr) => {
    //         if (n >= curr) {
    //             bloom += 'x'
    //         }

    //         if (bloom.length === k) {
    //             bloom = ''
    //             return ++sum
    //         }

    //         if (n < curr) {
    //             bloom = ''
    //         }

    //         return sum
    //     }, 0)
    // }

    // for (let i = maxDay; i > 0; i--) {
    //     const cal = calulateBloom(i)

    //     if (cal >= m) {
    //         minDay = i
    //     } else {
    //         break
    //     }
    // }

    // return minDay