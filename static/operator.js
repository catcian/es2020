// 数字转化 一元运算符

// 对数字转化无效
let x = 1
console.log('+(1)', +x)// 1

let y = -1
console.log('+(-1)', +y)// -1

// 转化非数字
let a = true
console.log('+true', +a)// 1

let b = false
console.log('+false', +b)// 0

let n = null
console.log('+null', +n)// 0

let undef = undefined
console.log('+undefined', +undef)// NaN

let strNull = " "
console.log('+" "', +strNull)// 0