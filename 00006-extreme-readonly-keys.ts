type GetReadonlyKeys<T> = { [key in keyof T]: T[key] extends Readonly<T> ? T[key] : never }
// type GetReadonlyKeys<T> = Readonly<T> 

interface Todo6 {
    readonly title: string
    readonly description: string
    completed: boolean
}

type Keys = GetReadonlyKeys<Todo6> // expected to be "title" | "description"

type Keys1 = keyof Todo6