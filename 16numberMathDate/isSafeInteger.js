console.log(Number.isSafeInteger()); //false
console.log(Number.isSafeInteger(1_000_000_000_000_009)); //true
console.log(Number.isSafeInteger(9_007_199_254_740_991)); //true
console.log(Number.isSafeInteger(9_007_199_254_740_992)); //false
console.log(Number.isSafeInteger(0.1)); //false
console.log(Number.isSafeInteger("1")); //false
console.log(Number.isSafeInteger(true)); //false
console.log(Number.isSafeInteger(Infinity)); //false
