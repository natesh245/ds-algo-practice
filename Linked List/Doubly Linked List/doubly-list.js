class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return this;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    } else {
      let poppedNode = this.tail;
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
      this.length--;
      return this;
    }
  }

  unshift(value) {
    const newHead = new Node(value);
    if (this.length == 0) {
      this.head = newHead;
      this.tail = this.head;
    }
    newHead.next = this.head;
    this.head.prev = newHead;
    this.head = newHead;
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return this;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return current;
      current = current.next;
    }
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return null;
    node.value = value;
    return this;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) return null;
    else if (index === 0) return this.unshift(value);
    else if (index === this.length - 1) return this.push(value);
    else {
      const beforeNode = this.get(index - 1);
      const newNode = new Node(value);
      newNode.next = beforeNode.next;
      newNode.prev = beforeNode;
      beforeNode.next.prev = newNode;
      beforeNode.next = newNode;
      this.length++;
      return this;
    }
  }
  remove(index, value) {
    if (index < 0 || index >= this.length) return null;
    else if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      const beforeNode = this.get(index - 1);
      const newNextNode = beforeNode.next.next;

      beforeNode.next = newNextNode;
      newNextNode.prev = beforeNode;
      this.length--;
      return this;
    }
  }
  reverse() {}
}

const list = new DoublyList();
list.push("Node 1 ");

// console.log("AFTER PUSH");
// console.dir(list, { depth: 10 });

list.push("Node 2");

list.push("Node 3");

console.log("AFTER PUSH");
console.dir(list, { depth: null });

// console.log("AFTER POP");
// console.dir(list.pop(), { depth: null });

// console.log("AFTER POP");
// console.dir(list.pop(), { depth: null });

// console.log("AFTER POP");
// console.dir(list.pop(), { depth: null });

// console.log("AFTER UNSHIFT");
// console.dir(list.unshift("new Node 1"), { depth: null });

// console.log("AFTER SHIFT");
// console.dir(list.shift(), { depth: null });

// console.log("AFTER GET");
// console.dir(list.get(1), { depth: null });

// console.log("AFTER SET");
// console.dir(list.set(2, "node 33"), { depth: null });

// console.log("AFTER INSERT");
// console.dir(list.insert(1, "node 22"), { depth: null });
