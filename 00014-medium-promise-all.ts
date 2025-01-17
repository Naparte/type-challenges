
// 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。


declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{ [key in keyof T]: T[key] extends Promise<infer R> ? R : T[key] }>

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = Promise.all([promise1, promise2, promise3] as const)

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type ttt = typeof Promise.resolve(3);
