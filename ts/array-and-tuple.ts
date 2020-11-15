// 数组 和元组
// 数字类型的数组
let arrOfNumbers: number[] = [1, 2, 3]

arrOfNumbers.push(3)
// arrOfNumbers.push('123')

function test() {
  console.log(arguments) // 类数组类型
  arguments[0]
  // let arr: any[] = arguments // 报错
}

// 元组 tuple
// 数组将同一类型的数据聚合到了一起
// 想加入不同类型的数据怎么办？any 会丧失具体的类型， 第一项数字，第二项字符串
// 元组起源于函数式编程
let user: [string, number] = ['viking', 20]
user.push('123') // 会突破数组长度的限制，但是只能是定义的数据类型
