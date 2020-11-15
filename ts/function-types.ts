function add(x: number, y: number): number {
  return x + y
}

let result = add(1, 3)

// 可选参数 ？ 可选参数后面不能添加确定的参数
function add1(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

let result1 = add1(1, 3)

// 函数表达式
const add3 = (x: number, y: number, z?: number): number => {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

// 函数类型 ：后面代表声明类型
const add4: (x: number, y: number, z?: number) => number = add3

// interface 可以描述各种类型
// 描述函数类型
interface ISum {
  (x: number, y: number, z?: number): number
}

const add5: ISum = add3
