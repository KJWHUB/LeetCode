/**
 * @param {Array} arr
 * @return {Generator}
 */
const inorderTraversal = function*(arr) {
    
    const integerList = String(arr).split(',')

    for(let i = 0; i < integerList.length; i++) {
        const res = integerList[i]

        if (res === '') continue

        yield res
    }

};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */