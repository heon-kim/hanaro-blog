type SizeOption = { XS: number; S: number; M: number; XL: number };

const SIZE = [
  { id: "XS", price: 8000 },
  { id: "S", price: 10000 },
  { id: "M", price: 12000 },
  { id: "L", price: 14000 },
  { id: "XL", price: 15000 },
];

const sizeOption1: SizeOption = { XS: 1, S: 5, M: 2, XL: 4 };
const totalPrice1 = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption1[size.id] * size.price,
  0
);

// SizeOption을 잘 못 기입한 경우
const sizeOption2: SizeOption = { XS: 2, S: 3, MM: 4, XL: 6 };
const totalPrice2 = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption2[size.id] * size.price,
  0
);
