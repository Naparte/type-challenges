type TupleKeys<T extends readonly any[]> = T extends readonly [infer R, ...infer args]
    ? TupleKeys<args> | args['length']
    : never



type MyEumn<T extends readonly any[], bol = false> = {
    readonly [key in TupleKeys<T> as Capitalize<T[key]>]: bol extends false ? T[key] : key
}

// type MyEumn<T extends readonly any[]> = {
//     [K in keyof T[number]]: {
//         [P in keyof T]: P extends K ? P : never
//     }[number]
// }

const OperatingSystem = ['macOS', 'Windows', 'Linux'] as const

type result9 = MyEumn<typeof OperatingSystem>

