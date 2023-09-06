// 实现一个通用的RequiredByKeys<T, K>，它接收两个类型参数T和K。

// K指定应设为必选的T的属性集。当没有提供K时，它就和普通的Required<T>一样使所有的属性成为必选的。

type RequiredByKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

interface User {
    name?: string
    age?: number
    address?: string
}

type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }

const uq: UserRequiredName = {
    name: '10',
    age: 9,
}

type t = Omit<User, 'name'> & Required<Pick<User, 'name'>>
type t2 = Omit<User, 'name'>;
type t3 = Pick<User, 'name'>;
type t4 = { a: string } & { b: number }

