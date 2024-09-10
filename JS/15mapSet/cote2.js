function manageEmployees(commands) {
  const employeeMap = new Map();

  let employees = [];

  const fns = {
    addEmployee: function (deptID, empID, empName) {
      if (!employeeMap.has(deptID)) {
        employeeMap.set(deptID, [{ empID, empName }]);
      } else {
        employeeMap.get(deptID).push({ empID, empName });
      }
    },
    removeDuplicates(deptID) {
      const employees = employeeMap.get(deptID);
      const uniqueEmployees = [];
      const seenNames = new Set();
      for (let emp of employees) {
        if (!seenNames.has(emp.name)) {
          uniqueEmployees.push(emp); // 중복되지 않는 직원만 추가
          seenNames.add(emp.name);
        }
      }
      employeeMap.set(deptID, uniqueEmployees); // 중복 제거 후 직원 목록 갱신
    },
    getEmployees(deptID) {
      const empsInDept = employeeMap.get(deptID);
      employees = empsInDept.map((emp) => emp.empName);
    },
  };

  commands.forEach((command) => {
    const [fn, ...args] = command.split(" ");
    fns[fn](...args);
  });

  return employees;
}

const commands = [
  "addEmployee 1 101 'Alice'",
  "addEmployee 1 102 'Bob'",
  "addEmployee 1 103 'Alice'", // 중복 이름
  "addEmployee 2 201 'Charlie'",
  "addEmployee 2 202 'Alice'", // 다른 부서에 같은 이름
  "removeDuplicates 1",
  "getEmployees 1",
  "getEmployees 2",
];

console.log(manageEmployees(commands));
