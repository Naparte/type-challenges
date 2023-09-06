// 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。

type Last<T> = T extends [...infer arr, infer lastItem] ? lastItem : never;

type arr110 = ['a', 'b', 'c']
type arr210 = [3, 2, 1]

type tail1 = Last<arr110> // expected to be 'c'
type tail2 = Last<arr210> // expected to be 1