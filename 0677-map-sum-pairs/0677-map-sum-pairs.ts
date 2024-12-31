class MapSum {
    map: Map<string, number>
    constructor() {
        this.map = new Map<string, number>()
    }

    insert(key: string, val: number): void {
        this.map.set(key, val)
    }

    sum(prefix: string): number {
        let total = 0
        for (const [key, val] of this.map) {
            if (key.startsWith(prefix)) {
                total += val
            }
        }
        return total
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */