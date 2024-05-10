/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function(fn, t) {
    const queue = []
    return function(...args) {
        if (queue[0]) {
            clearTimeout(queue[0])
            queue.pop()
        }
        const process = setTimeout(() => {
            fn(...args)
            queue.pop()
        }, t)
        queue.push(process)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */