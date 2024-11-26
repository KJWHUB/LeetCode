/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
    const answer = new Array(temperatures.length).fill(0);

    const stack = []

    for (let i = 0; i < temperatures.length; i++) {
        // 반복문 실행조건) stack 이 비어있지않고 && 현재 인덱스의 온도가 스택의 마지막 온도 보다 클때 실행
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx = stack.pop();
            answer[idx] = i - idx;
        }
        stack.push(i);
    }

    return answer
};