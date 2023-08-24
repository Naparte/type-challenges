// 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

type TupleToObject<T extends readonly any[]> = {
    [key in T[number]]: key
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const


type t3 = typeof tuple;

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}