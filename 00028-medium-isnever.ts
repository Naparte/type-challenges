
type IsNever<T> = [T] extends never[] ? true : false;

type A28 = IsNever<never> // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false

// https://github.com/microsoft/TypeScript/issues/31751