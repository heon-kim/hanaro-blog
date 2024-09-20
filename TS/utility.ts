/**
 *
 * 1. Partial과 Omit을 조합하여, 객체 타입에서 특정 속성을 제외하고, 나머지 속성을 선택적으로 만드는 타입을 구현
 * 2. 타입 이름은 PartialExcept<T,K>
 */

type PartialExcept<T, K extends keyof T> = Partial<Omit<T, K>> & Pick<T, K>;

/**
 * 1. DeepPartial<T> -> T가 객체인 경우, 그 내부의 속성들도 재귀적으로 선택적으로 만들어야 한다.
 * 2. 배열이나 함수 타입은 고려하지 않아도 된다.
 */

interface User {
  id: number;
  address: {
    street: string;
    city: string;
  };
}

type DeepPartial<T> = {};

type PartialUser = DeepPartial<User>;
