/**
 *
 * 선택적 속성, 읽기전용 속성을 이용해서 Person, Employee 인터페이스를 설계
 * 1. Person 인터페이스는 name, age(선택)
 * 2. Employee 인터페이스는 Person을 확장하며, 추가적으로 employeeId를 가지고 있다. (readonly)
 * 3. Employee 객체를 생성하고, 이름과 나이를 수정하는 코드를 작성하되, employeeId를 수정하려고 할 때 오류가 발생하는지 확인
 *
 */

interface Person {
  name: string;
  age?: number;
}

interface Employee extends Person {
  readonly employeeId: string;
}

const employee: Employee;
