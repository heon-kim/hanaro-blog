/**
 * 1. 선택한 속성들의 값을 null로 설정하고, 타입도 nullable로 설정할 수 있게 하세요
 * 2. 타입이름은 Nullable<T,K>
 * 3. K는 T의 키 중에서 선택한 속성들의 유니언 타입
 * 4. T에서 K에 해당하는 속성들의 타입을 T[P] | null 로 변경한 새로운 타입을 생성
 * 5. 기존의 나머지 속성들은 원래 타입을 유지
 */

interface User {
  id: number;
  email: string;
  age: number;
}

type NullableUser = Nullable<User, "email" | "age">;

type Nullable<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? T[P] | null : T[P];
};
