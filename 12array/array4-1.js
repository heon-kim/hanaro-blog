const assert = require("assert");

// 배열의 각 원소를 String으로 변환하시오.
const arr = [1, 2, 3, true];
const ret1 = arr.map((item) => item.toString());
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);
