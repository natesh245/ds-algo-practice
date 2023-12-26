class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(value) {
    this.queue.push(value);
    return this;
  }
  dequeue() {
    this.queue.shift();
    return this;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(3));
console.log(myQueue.dequeue());
