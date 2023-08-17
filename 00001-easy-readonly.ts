type MyReadonly<T> = {
    readonly [key in keyof T]: T[key]
}

interface Todo1 {
    title: string
    description: string
}

const todo1: MyReadonly<Todo1> = {
    title: "Hey",
    description: "foobar"
}

todo1.title = "Hello" // Error: cannot reassign a readonly property
todo1.description = "barFoo" // Error: cannot reassign a readonly property