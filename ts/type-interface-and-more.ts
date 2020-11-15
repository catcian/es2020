// 类型推论 联合类型 类型断言
let str = 'str'
// str = 123// 不能将类型“number”分配给类型“string”

// union types
let numberOrString: number | string
numberOrString = 'abc'
numberOrString = 123
numberOrString.length
// numberOrString.toString()// 访问共有的属性和方法

function getLength(input: string | number): number {
  // 类型断言
  const str = input as string
  if (str.length) {
    return str.length
  } else {
    const number = input as number
    return number.toString().length
  }
}

// type guard 守护
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    // 智能缩小范围
    return input.length
  } else {
    return input.toString().length
  }
}
