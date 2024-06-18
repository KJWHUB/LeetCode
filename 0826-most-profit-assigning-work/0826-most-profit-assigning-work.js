/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
const maxProfitAssignment = function(difficulty, profit, worker) {
    if (Math.min(...difficulty) > Math.max(...worker)) return 0

    worker.sort((a, b) => a - b)
    // [난이도, 이익, 작업자]
    // 근로자를 작업에 할당한 후 달성할 수 있는 최대 이익을 반환합니다.
    const n = difficulty.length
    const m = worker.length


    const map = new Map()

    for (let i = 0; i < n; i++) {
        const job = map.get(difficulty[i])
        if (job) {
            map.set(difficulty[i], job > profit[i] ? job : profit[i])
        } else {
            map.set(difficulty[i], profit[i])
        }
    }

    const arr = [...map].sort((a, b) => a[0] - b[0])
    let minProfit = 0

    return worker.reduce((sum, workerLevel, i) => {
        const fI = arr.findIndex(([key, value]) => {
            if (key <= workerLevel && minProfit < value) minProfit = value
            return key > workerLevel
        })

        if (fI) {
            arr.splice(0, fI)
        }

        return sum + minProfit
    }, 0)
};