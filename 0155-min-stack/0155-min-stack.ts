class MinStack {
    data: number[]
    min: number[]
    constructor() {
        this.data = []
        this.min = []
    }

    push(val: number): void {
        this.data.push(val)
        this.min.push(val)
        this.min.sort((a, b) => a - b)
    }

    pop(): void {
        const val = this.data.pop()
        this.min.splice(this.min.indexOf(val), 1)
    }

    top(): number {
        return this.data[this.data.length - 1]
    }

    getMin(): number {
        return this.min[0]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */