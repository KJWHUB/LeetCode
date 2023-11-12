/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => {
    const reverse = functions.reverse()
    
	return (x) => {
        let cnt = x
        reverse.forEach((el) => cnt = el(cnt))
        return cnt
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */