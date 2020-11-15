'use strict'
// console.log('abc',abc)

// console.log('abcd',abcd)

// console.log('ab',ab)

// 第一小节 变量
// 声明 或定义 message
/* let message

message = 'hello'

alert(message)
 */

// 简洁 变量定义 和 赋值合并一行
/* let message = 'hello1'
alert(message)
 */
// 一行中声明多个变量
// let user = 'John', age = 25, message = 'hello'

/**
 * 变量声明限制：
 * 1. 变量名称必须仅包含字母，数字，符号$ 和_
 * 2. 首字母必须非数字
 */

 /**
  * 第二小节 数据类型 8种基本的数据类型（7种原始类型和1种引用类型）
  */

  // 1. Number 整数和浮点数、Infinity、-Infinity、NaN
//  alert(1/0)

// 2. BigInt 用于表示任意长度的整数 ES6 新增
// 尾部的 "n" 表示这是一个 BigInt 类型
// const bigInt = 1234567890123456789012345678901234567890n;
// alert(typeof bigInt)

// 3. String 类型 字符串必须被括在引号里
let str1 = "Hello"// 双引号
let str2 = 'Hello'// 单引号
let str3 = `Hello`// 反引号

// 4. Boolean 类型 true、false

// 5. null 值 不属于上述任何一种类型
// let age = null
// alert(typeof age)// object 官方承认的 typeof 的行为上的错误

// 6. undefined 值 未被赋值
// 如果一个变量已被声明，但未被赋值，那么它的值就是undefined
// let age
// alert(age)// undefined

// 7. Object 类型 和 8.symbol 类型 （ES6 新增原始值）

// 第三小节 交互 alert prompt confirm

// let result = prompt(title [, default])

// let age = prompt('How old are you ? ', 28)
// alert(`You are ${age} years old !`)

// let result = comfirm(question) 返回 Boolean
// let isBoss = confirm('Are you the boss ? ')
// alert(isBoss)

