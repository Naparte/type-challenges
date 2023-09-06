type ClassPublicKeys<T> = keyof T;


class A {
    public str: string
    protected num: number
    private bool: boolean
    getNum() {
        return Math.random()
    }
}

type publicKyes = ClassPublicKeys<A> // 'str' | 'getNum'

let a: publicKyes = 'bool'