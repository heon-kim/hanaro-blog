console.log(new Date()); // 현재 날짜와 시간 출력
console.log(Date()); // 현재 날짜와 시간 문자열 출력
new Date().toString() === Date(); // true

const epoch = new Date(0);
console.log(epoch); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)

const utc = new Date(Date.UTC(1970, 0, 1));
console.log(utc); // Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)

const specificDate = new Date(2023, 6, 18, 12, 30, 0);
console.log(specificDate);

const dateFromMillis = new Date(1000); // 1970-01-01T00:00:01.000Z
console.log(dateFromMillis);

// 날짜비교
const date1 = new Date("2024-09-04");
const date2 = new Date("2024-09-05");
console.log(date1 < date2);

// 날짜에서 시간 제거
const removeTime = (date) => new Date(date.toDateString);

const datetime = new Date();
const dateOnly = removeTime(datetime);

console.log(datetime);
console.log(dateOnly);

// 내일 날짜
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

console.log(tomorrow);

const getLastDayOfMonth = (year, month) => new Date(year, month, 1);

console.log(getLastDayOfMonth(2024, 11));
