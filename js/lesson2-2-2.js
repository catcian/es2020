// 第二小节 转换
// ES5 将伪数组转换成数组怎么办？

// Array.slice 返回一个新的数组对象
// let args = [].slice.call(arguments) // collection
// arguments 1. 函数内部使用
// 2. ES6 已经废弃了使用arguments

// let imgs = [].slice.call(document.querySelectorAll('img')) // NodeList

// Array.prototype.from
// let args = Array.from(arguments)
// let imgs = Array.from(document.querySelectorAll('img'))
// Array.from(arrayLike, mapFn, thisArg)

// 初始化长度5，每个元素1
// let array = new Array(5)
// // forEach
// array.forEach(val => {
//  val = 1
// });

// console.log('forEach', array)

// for 循环
// for(let i = 0, len = array.length; i < len; i++){
//   array[i] = 1
// }
// console.log('for',array)

// 什么是伪数组？
// 特征：1.对象按照索引方式存储数据
// 2. 具备length 属性
// {0: 'a',1: 'b', length:2}
// let array = Array.from({length:5}, function(){return 1} )
// console.log('Array.from',array)


// 第三节
// ES5 如何创建新数组？

let array = new Array(5)

// 字面量对象 但不能指定长度
let array1 = []

// ES6 如何创建新数组？
// Array.prototype.of
// 快速把n个元素放到一个数组里去
// 1，2，3，4，5 放入到一个数组里，放弃ES5 push 的方式
let arrayof = Array.of(1,2,8,4,5)
console.log('Array.of', arrayof)

// Array.prototype.fill
// 初始化长度5，每个元素1 ,比Array.from 更方便
let arrayfill = Array(5).fill(1)
console.log('arrayfill',arrayfill)
// 语法： Array.fill(value, start, end)

// 将3，4 替换成 8
let arrayfill1 = [1,2,3,4,5]
console.log('arrayfill1', arrayfill1.fill(8, 2, 4))

// 第四节
// ES5 如何查找一个元素？ 1，验证某个元素是否在数组当中 2. 把满足每个条件的筛出来
let arrayfilter = [1,2,3,4,5]
let filter = arrayfilter.filter(function(item){
  // 返回的结果是偶数 去模
  return item % 2 === 0
  // return item === 3
})

// 只要判断返回的是空，非空
// 缺点 ，如果数组很大，只关心有没有数据，确保性能，filter会继续把所有的都找出来
console.log('filter', filter)




// ES6 如何查找一个元素
// Array.prototype.find
let find = arrayfilter.find(function (item){
  return item % 2 === 0
  // return item === 0
})
// 不关注返回所有的值，没有返回undefined, 满足条件的第一个值
console.log('find', find)

let findIndex = arrayfilter.findIndex(function (item){
  return item % 2 === 0
})
console.log('findIndex', findIndex)


