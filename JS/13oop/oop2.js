const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

Array.prototype.mapBy = function (key) {
  return this.map((item) => item[key]);
};

Array.prototype.findBy = function (key, value) {
  return this.filter((item) => item[key] == value);
};

Array.prototype.rejectBy = function (key, value) {
  return this.filter((item) => item[key] != value);
};

Array.prototype.sortBy = function (target) {
  const [key, order] = target.split(":");
  return this.sort((a, b) => {
    if (a[key] > b[key]) return order === "desc" ? -1 : 1;
    if (a[key] < b[key]) return order === "desc" ? 1 : -1;
  });
};

// 메서드 사용 예
console.log(users.mapBy("id"));
console.log(users.mapBy("name"));

console.log(users.findBy("id", 2));
console.log(users.findBy("name", "Kim"));

console.log(users.rejectBy("id", 2));

console.log(users.sort((a, b) => a.name.localeCompare(b.name))); // 문자열 정렬

console.log(users.sortBy("name:desc"));
