// 1. 数字枚举
enum Direction {
  Up, // 0 10
  Down, // 1 11
  Left, // 2 12
  Right, // 3 13
}

console.log(Direction.Up) // 0 node 13.13.0 npm 6.14.4 不支持 reserved word 保留关键字 (node 12.5.0 npm 6.9.0) ts-node enums.ts tsc enums.ts
console.log(Direction[0]) // Up

// 2. 字符串枚举
enum Direction1 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

const value = 'UP'
if (value === Direction1.Up) {
  console.log('go up')
}

// 3. 常量枚举 枚举的值存在两种类型：一种是常量值，一种是计算值，只有常量值可以进行常量枚举
const enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
if (value === Direction2.Up) {
  console.log('go up')
}
