/**
 * @param {string} val
 * @return {Object}
 */
const expect = function(val) {

  this.toBe = function(n) {
      const answer = val === n
      if (!answer) throw new Error("Not Equal")
      return answer
  }

  this.notToBe= function(n) {
      const answer = val !== n
      if (!answer) throw new Error("Equal")
      return answer
  }

  return this
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */