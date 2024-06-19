/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

        const fn = (start, last) => {
            if (start >= last) return start

            const mid = Math.floor(start + (last - start) / 2)
            const isBad = isBadVersion(mid)

            if (isBad) {
                return fn(start, mid)
            } else {
                return fn(mid + 1, last)
            }

        }
        return fn(1, n)
    };
};