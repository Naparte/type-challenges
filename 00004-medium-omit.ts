// 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。
// Omit 会创建一个省略 K 中字段的 T 对象。

type MyOmit<T, K extends keyof T> = {
    [key in keyof T as key extends K ? never : key]: T[key]
}



interface Todo4 {
    title: string
    description: string
    completed: boolean
    test: never
}

type TodoPreview4 = MyOmit<Todo4, 'description' | 'title'>

const todo: TodoPreview4 = {
    completed: false,
    test: false as never
}