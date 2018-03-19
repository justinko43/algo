class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
    return this.stack;
  }
  pop() {
    return this.stack.pop();
  }
  empty() {
    if (this.stack.length === 0) return true
    else return false;
  }
}


let stack = new Stack();
stack.push('hello');
stack.pop();
console.log(stack.empty());