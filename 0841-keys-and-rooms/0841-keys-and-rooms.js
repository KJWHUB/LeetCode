/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function(rooms) {

    const visited = new Set([0])
    const stack = [rooms[0]]

    while (stack.length) {
        const room = stack.shift()

        room.forEach((roomIndex) => {
            if (!visited.has(roomIndex)) {
                stack.push(rooms[roomIndex])
                visited.add(roomIndex)
            }
        })
    }
    
    return visited.size === rooms.length
};