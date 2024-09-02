class Stack {
  constructor(initialElements = []) {
    this.elements = Array.isArray(initialElements)
      ? initialElements
      : [initialElements];
  }
  push(element) {
    this.elements.push(element);
  }
  pop() {
    return this.elements.pop();
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  size() {
    return this.elements.length;
  }
  peek() {
    return this.elements[this.elements.length - 1];
  }
}

const stack = new Stack();
stack.push(3);
console.log(stack.pop());
