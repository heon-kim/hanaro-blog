type TPropertyKeyType = string | number | symbol;
type TUser = { [key: string]: string | number };

// function deleteArray(
//   arr: TUser[] | number[],
//   startOrKey: TPropertyKeyType,
//   endOrValue?: unknown
// ) {
//   if (typeof startOrKey === "number") {
//     if (typeof endOrValue === "number") {
//       return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
//     }
//     return arr.slice(0, startOrKey);
//   }

//   if (typeof startOrKey === "string") {
//     arr.filter((e) => {
//       if (e && typeof e === "object") {
//         // ...
//       }
//     });
//   }
//   if (typeof startOrKey === "symbol") {
//   }

//   return [];
// }

function deleteArray<T>(
  arr: T[],
  startOrKey: number | keyof T,
  endOrValue?: number | T[keyof T]
) {
  if (typeof startOrKey === "number") {
    return arr.filter(
      (_, i) =>
        i < startOrKey ||
        i >
          (typeof endOrValue === "number"
            ? endOrValue
            : Number.MAX_SAFE_INTEGER) -
            1
    );
  }

  return arr.filter(
    (a) => a && typeof a === "object" && a[startOrKey] !== endOrValue
  );
}

const arr = [1, 2, 3, 4];
console.log(deleteArray(arr, 2)); //[1,2]
console.log(deleteArray(arr, 1, 3)); //[1,4]
console.log(arr); //[1,2,3,4]

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

console.log(deleteArray(users, 2));
console.log(deleteArray(users, "id", 2));
