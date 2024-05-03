/**
 * @return {Generator<number>}
 */
const fibGenerator = function*() {
    const arr = []
    while(true) {
        if (arr.length === 0) arr.push(0)
        else if (arr.length === 1) arr.push(1)
        else arr.push(arr[arr.length - 2] + arr[arr.length - 1])
        yield arr[arr.length - 1]
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */