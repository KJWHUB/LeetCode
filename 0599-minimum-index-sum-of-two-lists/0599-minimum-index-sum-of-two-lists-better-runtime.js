/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function(list1, list2) {
    let answer = []
    let minSum =Infinity;
    const map = new Map();

    list1.forEach((ele,index) =>{
        map.set(ele,index)
    })

    for (let i = 0; i < list2.length; i++) {
        let sum = 0;

        if (map.has(list2[i])) {
            sum = map.get(list2[i]) + i;
        
            if (sum == minSum) {
                answer.push(list2[i])
            } else if (sum < minSum){
                answer = [];
                answer.push(list2[i]);
                minSum = sum
            }
        }
    }

    return answer;
};