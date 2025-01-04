/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = function(nums) {
    // 배열이 비어있거나 요소가 1개인 경우
    if (nums.length < 2) return 0;
    
    // 최대값을 찾아 비트 길이 계산
    const max = Math.max(...nums);
    const L = max.toString(2).length;
    
    let maxXor = 0;
    const prefixes = new Set();
    
    // 최상위 비트부터 순회
    for (let i = L - 1; i >= 0; i--) {
        // 현재 비트 위치로 maxXor 이동
        maxXor <<= 1;
        // 현재 위치에서 가능한 최대 XOR 값
        const currentXor = maxXor | 1;
        
        // 현재 비트 위치까지의 모든 prefix 저장
        nums.forEach(num => prefixes.add(num >> i));
        
        // 현재 XOR 값이 가능한지 확인
        const canAchieve = nums.some(num => {
            const prefix = num >> i;
            return prefixes.has(prefix ^ currentXor);
        });
        
        // 가능하다면 maxXor 갱신
        if (canAchieve) {
            maxXor = currentXor;
        }
        
        prefixes.clear();
    }
    
    return maxXor;
};