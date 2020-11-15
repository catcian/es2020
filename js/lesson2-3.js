// Class
// ES5 中怎么声明一个类？ 函数进行模拟

// 动物类、小猫、小动物 子类 继承关系
let Animal = function (type){
  // this = {}
  this.type = type

  // this.eat = function (){
  //   console.log('i am eat food')
  // }
  // return this
}

// 利用原型链的方式做继承
Animal.prototype.eat = function (){
  console.log('i am eat')
}

// eat 是公有属性，应该复用
// 缺点：共有属性、私有属性

// 定义实例

let dog = new Animal('dog')
let monkey = new Animal('monkey')
console.log('dog',dog)
console.log('monkey',monkey)

// 如果把 monkey 的eat 修改，很显然 dog 的eat 并不会修改，显然违背了 eag 是dog 和 monkey 的公有属性

// 修改 monkey 的 eat 内容
// monkey.eat = function (){
//   console.log('error')
// }
// 修改 Animal 上的 eat 内容
// console.log('monkey.constructor', monkey.constructor)

monkey.constructor.prototype.eat = function (){
  console.log('i am eat error')
}


// dog.eat()
// monkey.eat()
// 违背了继承的原则， 每个对象都会很大，把公有的方法写在函数的原型链[prototype]

// E6 如何声明一个类
class Animal1 {

  constructor(type){
    this.type = type
  }

  eat(){
    console.log('class Animal1 i am eat food')
  }

}

let dog1 = new Animal1('dog')
let monkey1 = new Animal1('monkey')
console.log('dog1',dog1)
console.log('monkey1',monkey1)

