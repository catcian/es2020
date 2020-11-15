// 范型？ 函数只做一件事，传入一个参数，返回就行
function echo(arg: any): any {
  return arg
}

const result: string = echo(123) // bug 传入number 返回定义string
/**
 * 范型，定义函数、接口和类的时候，不预先定义具体的类型，在使用的时候在指定类型的特征
 */

function echo1<T>(arg: T): T {
  return arg
}

// const str1: string = 'str'
// const result1 = echo1(str1)
// const result1：string = echo1(true) // 类型推断

// 范型传入多个值
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])

// 范型约束范型 2-13
