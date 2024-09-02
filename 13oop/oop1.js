class Emp {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const createEmpProxy = (emp) => {
  return new Proxy(emp, {
    get(target, prop, receiver) {
      if (prop === "fullName") {
        return `${target.firstName} ${target.lastName.toUpperCase()}`;
      }
      return Reflect.get(target, prop, receiver);
    },

    set(target, prop, value, receiver) {
      if (prop === "fullName") {
        const [firstName, lastName] = value.split(" ");
        target.firstName = firstName;
        target.lastName = lastName;
        return true;
      }
      return Reflect.set(target, prop, value, receiver);
    },
  });
};

// 사용 예시
const hong = createEmpProxy(new Emp());
hong.fullName = "Kildong Hong";
console.log(hong.fullName); // 'Kildong HONG'
hong.fullName = "Lee Minho";
console.log(hong.firstName); // 'Lee'
console.log(hong.lastName); // 'Minho'
console.log(hong.fullName); // 'Lee MINHO'
