/**
 * 주어진 숫자를 완전 제곱수들의 합으로 표현할 때 필요한 최소 개수를 반환하는 함수
 * BFS(너비 우선 탐색) 알고리즘 사용
 * @param {number} n - 분해하고자 하는 양의 정수
 * @return {number} - 필요한 완전 제곱수의 최소 개수
 */
const numSquares = (n) => {
    // 기본 케이스: 0은 0개의 완전 제곱수가 필요
    if(n === 0) return 0;
    
    // 필요한 변수들 초기화
    const perfectSquares = [];  // 가능한 모든 완전 제곱수들을 저장할 배열
    const queue = [n];         // BFS를 위한 큐, 시작점으로 n을 넣음
    let level = 1;            // 현재 사용중인 완전 제곱수의 개수
    
    // n보다 작거나 같은 모든 완전 제곱수들을 생성
    for(let i = 1; i * i <= n; i++) {
        perfectSquares.push(i * i);
    }
    
    // BFS 구현
    while(queue.length) {
        const size = queue.length;        // 현재 레벨의 노드 개수
        const visited = new Set();        // 현재 레벨에서 이미 확인한 숫자들을 저장
        
        // 현재 레벨의 모든 노드를 처리
        for(let i = 0; i < size; i++) {
            const current = queue.shift();
            
            // 각 완전 제곱수에 대해 시도
            for(const square of perfectSquares) {
                const remainder = current - square;
                
                // 정답을 찾은 경우
                if(remainder === 0) return level;
                // 음수가 된 경우 스킵
                if(remainder < 0) continue;
                
                // 새로운 숫자이면 큐에 추가
                if(!visited.has(remainder)) {
                    visited.add(remainder);
                    queue.push(remainder);
                }
            }
        }
        level++;  // 다음 레벨로 이동
    }
    
    return level;
};