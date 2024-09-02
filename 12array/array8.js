function keyPair(arr, N) {
  let result = [];
  arr.forEach((item, index) => {
    const findIndex = arr.findIndex((i) => i == N - item);
    if (findIndex > -1) {
      result = [index, findIndex];
    }
  });
  return result;
}

console.log(keyPair([1, 3, 4, 5], 7));
