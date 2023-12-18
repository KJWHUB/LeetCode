/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function(fn) {
    this.counter = 0
    
	return function(...args){
        if (this.counter === 0) {
            this.counter++
            return fn(...args)
        }
        return
        
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
