/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async (promise1, promise2) => {
    const res = await Promise.all([promise1, promise2])
    return  res.reduce((acc, curr) => acc + curr)
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */