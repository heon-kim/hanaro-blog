class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // 이터레이터 생성
  *[Symbol.iterator]() {
    for (let i = this.items.length - 1; i >= 0; i--) {
      yield this.items[i];
    }
  }
}

const stack = new Stack();

console.log([...stack]);

for (const s of stack) console.log(s);

const itStack = stack[Symbol.iterator]();
console.log(itStack.next());
console.log(itStack.next());
