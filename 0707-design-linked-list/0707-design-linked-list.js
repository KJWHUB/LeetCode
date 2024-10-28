const Node = function(val, next = null) {
    return { val, next }
};

const getFindIndexNode = (headNode, index) => {
    let current = headNode
    for(let i = 0; i < index; i++) {
        current = current.next
    }
    return current
}

const getLastNode = (headNode) => {
    let current = headNode
    while(current.next) {
        current = current.next
    }
    return current
}


class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    // 유효하지 않은 경우
    if (this.size <= index) {
        return -1
    }

    const findNode = getFindIndexNode(this.head, index)

    return findNode.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.head = Node(val, this.head)
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.size === 0) {
        this.addAtHead(val)
        return
    }

    const lastNode = getLastNode(this.head)
    lastNode.next = Node(val, null)
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    console.log('addAtIndex', this.size, this.head, index, val)
    if (index > this.size) {
        return
    }

    if (index === 0) {
        this.addAtHead(val)
        return
    }

    if (index === this.size) {
        this.addAtTail(val)
        return
    }

    const findPrevNode = getFindIndexNode(this.head, index - 1)
    findPrevNode.next = Node(val, findPrevNode.next)
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size) {
        return
    }

    if (index === 0) {
        this.head = this.head.next
        this.size--
        return
    }

    const findPrevNode = getFindIndexNode(this.head, index - 1)
    const deleteNode = findPrevNode.next
    findPrevNode.next = deleteNode.next
    this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */