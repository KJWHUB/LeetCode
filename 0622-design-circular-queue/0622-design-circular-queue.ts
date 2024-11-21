class MyCircularQueue {
    data: number[]
    size: number

    constructor(k: number) {
        this.data = []
        this.size = k
    }

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false
        }
        this.data.push(value)
        return true
    }

    deQueue(): boolean {
        if (this.isEmpty()) {
            return false
        }
        this.data.shift()
        return true
    }

    Front(): number {
        return this.data[0] ?? -1
    }

    Rear(): number {
        return this.data[this.data.length - 1] ?? -1
    }

    isEmpty(): boolean {
        return this.data.length === 0
    }

    isFull(): boolean {
        return this.size === this.data.length
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */