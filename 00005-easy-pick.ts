type MyPick<T, K extends keyof T> = { [key in K]: T[key] }

interface Todo5 {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo5, 'title' | 'completed'>

const todo5: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

