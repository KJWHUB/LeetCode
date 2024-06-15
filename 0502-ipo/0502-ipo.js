/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
 // my solution
// const findMaximizedCapital = function(k, w, profits, capital) {

//     if (Math.min(...capital) > w) return 0

//     let totalW = w

//     const list = []

//     for (let i = 0; i < profits.length; i++) {
//         list.push({
//             profit: profits[i],
//             capital: capital[i]
//         })
//     }

//     list.sort((a, b) => a.capital - b.capital)

//     const projectProgress = () => {
//         const findIndex = list.findIndex((project) => project.capital <= totalW)
//         const find = list[findIndex]

//         if (findIndex < 0) return

//         totalW += find.profit

//         // clear project
//         list.splice(findIndex, 1)
//     }

//     for(let i = 0; i < k; i++) {

//         if (!list.length) break

//         projectProgress()
//     }

//     return totalW
    
// };

var findMaximizedCapital = function (
    distinctProjects,
    initialCapital,
    profits,
    capitals
) {
    const { PriorityQueue } = require("@datastructures-js/priority-queue");
    const pqMaxProfits = new PriorityQueue({ compare: (a, b) => b - a });

    let capitalProfits = capitals.map((capital, i) => [capital, profits[i]]);
    capitalProfits.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let availableCapital = initialCapital;
    let n = capitalProfits.length; // total projects

    let p = 0; // project counter
    while (distinctProjects--) {
        for (; p < n; p++) {
            let [minCapital, profit] = capitalProfits[p];
            if (minCapital <= availableCapital) {
                pqMaxProfits.enqueue(profit); // take all projects that if we can
            } else {
                break;
            }
        }
        if (!pqMaxProfits.isEmpty()) {
            let maxProfit = pqMaxProfits.dequeue();
            availableCapital += maxProfit; // take 1 max project
        }
    }
    return availableCapital;
};