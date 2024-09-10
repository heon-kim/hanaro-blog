const total = { price: 45000, vat: 4500 };

// function fmt(tmplstrs, ...args) {
//   let ret = tmplstrs[0];
//   for (let i = 0; i < tmplstrs.length - 1; i += 1) {
//     ret += args[i] + tmplstrs[i + 1];
//   }
//   return ret;
// }

function fmt([label, unit], price) {
  return `${label}${price.toLocaleString().padStart(8)}${unit}`;
}

console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);
