class Collection {
  constructor() {
    if (new.target === Collection) {
      throw new TypeError("Cannot construct Collection instances directly");
    }
    this.elements = [];
  }
  clear() {
    this.elements = [];
  }
  print() {
    console.log(this.elements.join(", "));
  }
  remove() {
    this.poll(); // 가장 먼저 들어온 요소를 제거 (Stack의 경우 가장 나중에 들어온 요소를 제거)
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  peek() {
    return this.elements[0]; // Queue의 경우 가장 먼저 들어온 요소를 반환, Stack에서는 오버라이드 필요
  }
  poll() {
    return this.elements.shift(); // Queue의 경우 가장 먼저 들어온 요소를 반환 및 제거, Stack에서는 오버라이드 필요
  }
  length() {
    return this.elements.length;
  }
  toArray() {
    return [...this.elements];
  }
}

class Stack extends Collection {
  constructor(initialElements = []) {
    super();
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
  peek() {
    return this.elements[this.elements.length - 1];
  }
  poll() {
    return this.pop();
  }
  remove() {
    this.pop();
  }
}

class Queue extends Collection {
  constructor(initialElements = []) {
    super();
    this.elements = Array.isArray(initialElements)
      ? initialElements
      : [initialElements];
  }
  enqueue(element) {
    this.elements.push(element);
  }
  dequeue() {
    return this.poll();
  }
}

const stack = new Stack([1, 2]);
stack.push(3); // 스택에 3 추가
console.log(stack.pop()); // 3 제거 후 반환
console.log(stack.peek()); // 2 반환 (마지막 요소)
stack.print(); // 스택 요소 출력: "1, 2"
stack.clear(); // 스택 비우기

const queue = new Queue();
queue.enqueue(3); // 큐에 3 추가
queue.enqueue(2); // 큐에 2 추가
console.log(queue.dequeue()); // 3 제거 후 반환 (첫 번째 요소)
console.log(queue.peek()); // 2 반환 (첫 번째 요소)
queue.print(); // 큐 요소 출력: "2"
queue.clear(); // 큐 비우기

const arr = queue.toArray().map((a) => console.log(a)); // 배열로 변환하여 출력
