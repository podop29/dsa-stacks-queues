/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }


  /**Print queue */
  print(){
    let currNode = this.first;
    while(currNode){
      console.log(currNode.val)
      currNode = currNode.next;
    }
    return undefined
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.size++;;
    return undefined
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(!this.first){
      throw new Error("Empty list");
    }
    const firstVal = this.first.val;
    this.first = this.first.next;
    this.size--;
    return firstVal;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return (!this.first) ? true : false;
  }
}

let q = new Queue();
console.log(q.isEmpty())


module.exports = Queue;
