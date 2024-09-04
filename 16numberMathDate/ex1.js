// 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오
const first = +new Date(1970, 1, 1);
const second = +new Date(1970, 1, 2);
console.log(second - first);

// 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오

// 내년(2025년)의 오늘의 요일을 출력하시오
const weeks = ["일", "월", "화", "수", "목", "금", "토"];
const today = new Date();
const todayInNextYear = new Date(
  today.getFullYear() + 1,
  today.getMonth() + 1,
  today.getDate()
);
console.log(weeks[todayInNextYear.getDay()]);

// 오늘로부터 100일 후의 날짜는
const todayDate = new Date(2024, 1, 1); // 2월 1일 (인덱스 1)
const futureDate = new Date(todayDate);
futureDate.setDate(todayDate.getDate() + 100);

console.log(futureDate.toDateString()); // 예: "Thu May 11 2024"
