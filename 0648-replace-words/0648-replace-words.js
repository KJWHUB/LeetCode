/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function(dictionary, sentence) {
    dictionary.sort()
    return sentence.split(' ').map((str) => {
        for (const prefix of dictionary) {
            if (str.startsWith(prefix)) {
                return prefix
            }
        }
         return str
    }).join(' ')
};