/**abs */
Math.abs(-1); // 1
Math.abs("-1"); // 1 ('-1'은 숫자 -1로 변환)
Math.abs(0.3 - 0.2); // 0.1

Math.abs(""); // 0 (''은 숫자 0으로 변환)
Math.abs([]); // 0 ([]는 숫자 0으로 변환)
Math.abs(null); // 0 (null은 숫자 0으로 변환)

Math.abs(); // NaN (인수가 없으면 NaN)
Math.abs(undefined); // NaN (undefined는 숫자 NaN으로 변환)
Math.abs({}); // NaN ({}는 숫자 NaN으로 변환)
Math.abs("abc"); // NaN ('abc'는 숫자 NaN으로 변환)

/**round */
Math.round(1.4); // 1
Math.round(1.6); // 2
Math.round(-1.4); // -1
Math.round(-1.6); // -2
Math.round(); // NaN (인수가 없으면 NaN)

/**ceil */
Math.ceil(1.1); // 2
Math.ceil(1.9); // 2
Math.ceil(-1.1); // -1
Math.ceil(-1.9); // -1
Math.ceil(); // NaN

/**floor */
Math.floor(1.1); // 1
Math.floor(1.9); // 1
Math.floor(-1.1); // -2
Math.floor(-1.9); // -2
Math.floor(); // NaN

/**pow */
Math.pow(2, 4); // 16
Math.pow(2, -1); // 0.5
Math.pow(1); // NaN
Math.pow(); // NaN

/**max,min */
Math.max(1, 3, 5, 9); //9
Math.max(); //Infinity
Math.min(1, 3, 5, 9); //1
Math.min(); // Infinity

const arr = [1, 2, 3, 5, 4];
console.log(Math.max(...arr), Math.min(...arr)); // 5 1

/**random */
Math.random(); // 0.2323
Math.floor(Math.random() * 10 + 1); // 1~10 사이의 난수
const randomInRange = (s, e) => s + (e - s) * Math.random();
randomInRange(5, 10);
const randomIntInRange = (s, e) => s + Math.floor((e - s) * Math.random());
randomIntInRange(5, 10);
const randomIntInRangeInclusive = (s, e) =>
  s + Math.floor((e - s + 1) * Math.random());
randomIntInRangeInclusive(5, 10);
const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
rand(5, 10);

/**etc */
console.log(Math.sign(-5));
console.log(Math.sign(0));
console.log(Math.sign(5));
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));
console.log(Math.cbrt(27)); // 3 (세 제곱근)
console.log(Math.cbrt(-8)); // -2 (세 제곱근)
console.log(Math.exp(1)); // 2.718281828459045 (e^1)
console.log(Math.exp(2)); // 7.3890560989306495 (e^2)
console.log(Math.expm1(1)); // 1.718281828459045 (e^1 - 1)
console.log(Math.expm1(0)); // 0 (e^0 - 1)
console.log(Math.hypot(3, 4)); // 5 (피타고라스 정리, sqrt(3^2 + 4^2))
console.log(Math.hypot(5, 12)); // 13 (sqrt(5^2 + 12^2))
console.log(Math.log(Math.E)); // 1 (자연로그, ln(e))
console.log(Math.log(1)); // 0 (ln(1))
console.log(Math.log10(10)); // 1 (상용로그, log10(10))
console.log(Math.log10(100)); // 2 (log10(100))
console.log(Math.log2(2)); // 1 (log2(2))
console.log(Math.log2(8)); // 3 (log2(8))
console.log(Math.log1p(0)); // 0 (log(1+0))
console.log(Math.log1p(Math.E - 1)); // 1 (log(1+e-1))
console.log(Math.clz32(1)); // 31 (32비트 정수에서 왼쪽으로부터 연속된 0의 개수)
console.log(Math.clz32(0b10)); // 30 (2진수 10, 32비트 중 앞의 30개가 0)
console.log(Math.imul(2, 3)); // 6 (32비트 정수 곱셈)
console.log(Math.imul(0xfffffffe, 5)); // -10 (2^32 이하의 곱셈)
console.log(Math.fround(2.55)); // 2.549999952316284 (32비트 부동 소수점으로 변환)
console.log(Math.fround(1.337)); // 1.3370000123977661
console.log(Math.sin(Math.PI / 2)); // 1 (sin 90도)
console.log(Math.cos(Math.PI)); // -1 (cos 180도)
console.log(Math.tan(Math.PI / 4)); // 1 (tan 45도)
console.log(Math.sinh(0)); // 0 (sinh 0)
console.log(Math.cosh(0)); // 1 (cosh 0)
console.log(Math.tanh(0)); // 0 (tanh 0)
