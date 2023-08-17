
type MyReadonly2<T, K extends keyof T> = Pick<Readonly<T>, K> & Omit<T, K>;


interface Todo7 {
    title: string
    description: string
    ion: string
    completed: boolean
}

const todo7: MyReadonly2<Todo7, 'title' | 'description'> = {
    title: 'ssssss',
    description: 'ssssss',
    ion: 'ssssss',
    completed: true
}

todo7.title = "Hello" // Error: cannot reassign a readonly property
todo7.description = "barFoo" // Error: cannot reassign a readonly property
todo7.completed = true // OK
