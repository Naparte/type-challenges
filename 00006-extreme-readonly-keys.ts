type Equals<X, Y> =
    (<T>() => (T extends X ? 1 : 2)) extends
    (<Z>() => (Z extends Y ? 1 : 2))
    ? true
    : false;
// https://juejin.cn/post/7078208046283014158


type GetReadonlyKeys<T> = { [key in keyof T]: Equals<Pick<T, key>, Readonly<Pick<T, key>>> extends true ? key : never }[keyof T]

interface Todo6 {
    readonly title: string
    readonly description: string
    completed: boolean
}

type Keys = GetReadonlyKeys<Todo6> // expected to be "title" | "description"
