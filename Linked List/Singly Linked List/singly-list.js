class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let current = this.head;
    let newTail = null;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    if (newTail) newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) this.head = null;
    return this;
  }

  unshift(value) {
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return this;
    const newHead = this.head.next;
    this.head = newHead;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return this;
  }

  get(index) {
    if ((index < 0 || index >= this.length) && this.length == 0) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (index === i) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  set(index, value) {
    const getNode = this.get(index);
    if (getNode) getNode.value = value;
    else {
      return "Invalid index";
    }
    return this;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return null;
    else if (index === 0) return this.unshift(value);
    else if (index === this.length - 1) return this.push(value);
    else {
      const prevNode = this.get(index - 1);
      const newNode = new Node(value);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
      return this;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    else if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      const prevNode = this.get(index - 1);
      prevNode.next = prevNode.next.next;
      this.length--;
      return this;
    }
  }
  reverse() {}
}

const list = new SinglyList();
list.push("Node 1");
list.push("Node 2");
list.push("Node 3");
// console.log("__AFTER 3 PUSH___");
// console.dir(list, { depth: null });

// list.pop();
// console.log("__AFTER POP___");
// console.dir(list, { depth: null });
// list.pop();
// console.log("__AFTER POP___");
// console.dir(list, { depth: null });
// list.pop();
// console.log("__AFTER POP___");
// console.dir(list, { depth: null });

// list.unshift("new node 1");
// console.log("__AFTER UNNSHIFT___");
// console.dir(list, { depth: null });

// list.unshift("new node 2");
// console.log("__AFTER UNNSHIFT___");
// console.dir(list, { depth: null });

// list.shift();
// console.log("__AFTER SHIFT___");
// console.dir(list, { depth: null });

// list.shift();
// console.log("__AFTER SHIFT___");
// console.dir(list, { depth: null });

// list.shift();
// console.log("__AFTER SHIFT___");
// console.dir(list, { depth: null });

// list.shift();
// console.log("__AFTER SHIFT___");
// console.dir(list, { depth: null });

// const getValue = list.get(-1);
// console.log("__AFTER GET___");
// console.dir(getValue, { depth: null });

// list.set(0, "Node 11");
// console.log("__AFTER SET___");
// console.dir(list, { depth: null });

// list.set(1, "Node 22");
// console.log("__AFTER SET___");
// console.dir(list, { depth: null });

// list.set(2, "Node 33");
// console.log("__AFTER SET___");
// console.dir(list, { depth: null });

// let result = list.set(5, "Node 55");
// console.log("__AFTER SET___");
// console.dir(result, { depth: null });

// let result = list.insert(0, "new Node 1");
// console.log("__AFTER INSERT___");
// console.dir(result, { depth: null });

// let result2 = list.insert(1, "new Node 2");
// console.log("__AFTER INSERT___");
// console.dir(result2, { depth: null });

// let result3 = list.insert(2, "new Node 3");
// console.log("__AFTER INSERT___");
// console.dir(result2, { depth: null });

// let result4 = list.insert(5, "new Node 5");
// console.log("__AFTER INSERT___");
// console.dir(result4, { depth: null });

// let result = list.remove(1);
// console.log("__AFTER REMOVE___");
// console.dir(result, { depth: null });
