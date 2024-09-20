/**
 * 1. 인터페이스 A와 B를 정의
 * 2. 클래스 MyClass가 A와 B를 구현
 * 3. MyClass에서 메서드 오버로딩을 사용하여 doTask 구현
 *    - 인자가 문자열이면 해당 문자열을 출력
 *    - 인자가 숫자이면 해당 숫자의 제곱을 출력
 */

interface A {
  doTask(param: string): string;
}

interface B {
  doTask(param: number): number;
}

class MyClass implements A, B {
  doTask(arg: string | number) {
    if (typeof arg == "string") {
      console.log(arg);
    } else if (typeof arg == "number") {
      console.log(Math.pow(arg, 2));
    }
  }
}
