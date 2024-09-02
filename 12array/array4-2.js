const assert = require("assert");

const classNames = (...args) => {
  let arr = [...args].filter((item) => item);
  return arr.join(" ");
};

const ret2 = classNames("", "a b c", "d", "", "e");
console.log(ret2);
assert.strictEqual(ret2, "a b c d e");
