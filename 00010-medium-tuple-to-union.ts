// 实现泛型TupleToUnion<T>，它返回元组所有值的合集。


type TupleToUnion<T extends readonly any[]> = keyof {
    [key in T[number]]: key
}

// type MyTupleToUnion<T extends readonly any[]> = T[number]

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'