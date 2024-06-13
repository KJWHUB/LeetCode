/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = function(seats, students) {
    seats.sort((a, b) =>  a - b)
    students.sort((a, b) =>  a - b)

    const hash = new Map()

    seats.forEach((seatNumber) => {
        if (hash.has(seatNumber)) {
            const get = hash.get(seatNumber)
            hash.set(seatNumber, get + 1)
        } else {
            hash.set(seatNumber, 1)
        }
    })

    const seatKeys = hash.keys()

    let currKey = seatKeys.next().value

    return students.reduce((sum, studentCurrentSeatNumber) => {
        
        const hashFind = hash.get(studentCurrentSeatNumber)

        if (hashFind) {
            hash.set(studentCurrentSeatNumber, hashFind - 1)
            return sum
        }
        

        while(currKey) {

            const find = hash.get(currKey)

            if (find) {
                hash.set(currKey, find - 1)
                return sum + Math.abs(currKey - studentCurrentSeatNumber)
            }

            currKey = seatKeys.next().value

        }

        return sum

    }, 0)
};