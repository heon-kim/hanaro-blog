const assert = require("assert");

const arr = [1, 2, 3, 4];

function deleteArray(array, start, end) {
  const newArr = array.slice(start, end);
  const restArr = array.filter((item) => !newArr.includes(item));
  if (restArr.length == 1) {
    return restArr[0];
  }
  return restArr;
}

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]); //index 2부터 끝까지 지우기
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2]);
