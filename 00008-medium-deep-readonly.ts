type DeepReadonly<T> = { readonly [key in keyof T]: T[key] extends object ? DeepReadonly<T[key]> : T[key] }

type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type Todo = DeepReadonly<X> 