/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
    this.initial = init
    this.counter = init
    
    this.increment = () => ++this.counter
    this.decrement = () => --this.counter
    this.reset = () => this.counter = this.initial
    
    return this
};



/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */