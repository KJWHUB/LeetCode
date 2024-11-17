/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function(list1, list2) {
    const map = {}

    const updateMap = (list) => {
        for (let i = 0; i < list.length; i++) {
            if (map[list[i]]) {
                map[list[i]].sum += i
                map[list[i]].count++
            } else {
                map[list[i]] = {
                    sum: i,
                    count: 1
                }
            }
        }
    }

    updateMap(list1)
    updateMap(list2)


    const entries = Object.entries(map).filter(([_key, value]) => value.count === 2)

    const min = Math.min(...entries.map(([_key, value]) => value.sum))

    return entries.filter(([_key, value]) => value.sum === min).map((el) => el[0])
};