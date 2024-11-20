class RandomizedSet {
    data: Record<string, number> = null

    constructor() {
        this.data = {}
    }

    has(val: number): boolean {
        return Number.isInteger(this.data[val])
    }

    insert(val: number): boolean {
        if (this.has(val)) {
            return false
        }

        this.data[val] = val
        return true
    }

    remove(val: number): boolean {
        if (this.has(val)) {
            delete this.data[val]
            return true
        }

        return false
    }

    getRandom(): number {
        const list = Object.values(this.data)
        let index = Math.floor(Math.random() * list.length)

        if (index === list.length) {
            index--
        }

        return  list[index]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */