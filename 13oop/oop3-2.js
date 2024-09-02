class Queue {
  constructor(initialElements = []) {
    this.elements = Array.isArray(initialElements)
      ? initialElements
      : [initialElements];
  }

  enqueue(item) {
    this.elements.push(item);
  }

  dequeue() {
    return this.elements.shift();
  }
  // 큐가 비어있는지 확인
  isEmpty() {
    return this.elements.length === 0;
  }

  // 큐의 크기를 반환
  size() {
    return this.elements.length;
  }

  // 큐의 첫 번째 요소를 반환 (제거하지 않음)
  peek() {
    return this.elements[0];
  }
}

const queue = new Queue();

queue.enqueue(3);
queue.enqueue(2);
console.log(queue.dequeue());
