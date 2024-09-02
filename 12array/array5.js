const reduce = (arr, fn, initValue) => {};

reduce([1, 2, 3], (a, b) => a + b, 0); // 6
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120
