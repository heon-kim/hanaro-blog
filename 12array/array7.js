function range(start, end, gap) {
  let arr = [];
  for (let i = start; i < end; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(range(1, 10, 1));
