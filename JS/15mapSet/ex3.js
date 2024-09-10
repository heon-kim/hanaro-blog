const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

// function intersect(first, second) {
//   return new Set([...first.filter((item) => second.includes(item))]);
// }

// function union(first, second) {
//   return new Set([...first.concat(second)]);
// }

// function diff(first, second) {
//   const un = union(first, second);
//   const it = intersect(first, second);
//   it.forEach((item) => {
//     un.delete(item);
//   });
//   return un;
// }

function intersect(arr1, arr2) {
  return [...new Set(arr1)].filter((item) => new Set(arr2).has(item));
}

function diff(arr1, arr2) {
  return [...new Set(arr1)].filter((item) => !new Set(arr2).has(item));
}

function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(intersect(A, B));
console.log(intersect(A, C));

console.log(diff(A, B));
console.log(diff(B, A));
console.log(diff(A, C));
console.log(diff(B, C));

console.log(union(A, B));
console.log(union(A, C));
