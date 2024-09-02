const itAdd = add();

function* add() {
  const x = yield 1;
  const y = yield 1;
  return x + y;
}

console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log(itAdd.next(2).value);
