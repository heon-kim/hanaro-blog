const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];

const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

const deptMap = new Map(depts.map((dept) => [dept.id, dept]));
const empMap = new Map(emps.map((emp) => [emp.id, emp]));

console.log(deptMap);
console.log(empMap);

const empDept = new Map(emps.map((emp) => [emp, deptMap.get(emp.dept)]));

console.log(empDept);
console.log(empDept.get(kim).dname);
