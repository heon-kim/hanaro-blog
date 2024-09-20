class ArrayList {
  constructor(array = []) {
    this.head = ArrayList.arrayToList(array);
  }

  static arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }

  static listToArray(list) {
    const array = [];
    while (list) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }

  add(value, index = null) {
    if (index === null || index >= this.size()) {
      this.head = { value, rest: this.head };
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index - 1 && current.rest) {
        current = current.rest;
        currentIndex++;
      }
      current.rest = { value, rest: current.rest };
    }
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.rest;
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index - 1 && current.rest) {
        current = current.rest;
        i++;
      }
      if (current.rest) {
        current.rest = current.rest.rest;
      }
    }
  }

  get(index) {
    let node = this.head;
    let i = 0;
    while (i < index && node) {
      node = node.rest;
      i++;
    }
    return node ? node.value : undefined;
  }

  set(index, value) {
    let node = this.head;
    let i = 0;
    while (i < index && node) {
      node = node.rest;
      i++;
    }
    if (node) {
      node.value = value;
    }
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.rest;
    }
    return count;
  }

  indexOf(value) {
    let node = this.head;
    let index = 0;
    while (node) {
      if (node.value === value) return index;
      node = node.rest;
      index++;
    }
    return -1;
  }

  contains(value) {
    return this.indexOf(value) !== -1;
  }

  isEmpty() {
    return this.head === null;
  }

  peek() {
    return this.head ? this.head.value : undefined;
  }

  toArray() {
    return ArrayList.listToArray(this.head);
  }

  clear() {
    this.head = null;
  }

  print() {
    console.log(this.head);
  }

  *iterator() {
    let node = this.head;
    while (node) {
      yield node.value;
      node = node.rest;
    }
  }
}

const alist = new ArrayList([1, 2]);
alist.add(3);
alist.add(5, 1);
alist.print();
