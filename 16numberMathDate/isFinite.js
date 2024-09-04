console.log(Number.isFinite()); // false
console.log(Number.isFinite(0)); //true
console.log(Number.isFinite("0")); // false
console.log(Number.isFinite(Number.MAX_VALUE)); //true
console.log(Number.isFinite(Number.MIN_VALUE)); //true
console.log(Number.isFinite()); //false
console.log(isFinite()); //false
console.log(Number.isFinite(Infinity)); //false
