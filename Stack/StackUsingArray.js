class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
    return this.stack;
  }
  pop() {
    return this.stack.pop();
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
