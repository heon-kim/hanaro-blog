console.log(9007199254740992 === 9007199254740993); // true
console.log(9007199254740992n === 9007199254740993n); // false

console.log(100n === 100); // false (자료형이 다름)
console.log(100n == 100); // true  (값은 같음)

BigInt(0.5); // Error

console.log(0b100000000000000000000000000000000000000000000000000011n); // 이진수
console.log(0x20000000000003n); // 16진수
