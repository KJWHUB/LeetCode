/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
const minPatches = function(nums, n) {

    let miss = 1; // 만들 수 없는 가장 작은 숫자
    let i = 0; // nums 배열의 인덱스
    let patch = 0; // 필요한 패치의 수

    // miss가 n 이하인 동안 반복
    while (miss <= n) {
        // nums[i]가 miss 이하인 경우 miss에 nums[i]를 더하고 다음 인덱스로 이동
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i];
            i++;
        } else {
            // nums[i]가 miss보다 큰 경우, miss를 두 배로 만들고 패치 수를 증가
            miss += miss;
            patch++;
        }
    }

    return patch

};