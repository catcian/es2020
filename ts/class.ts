// 使用三种访问修饰符
// Public 修饰的属性或方法是公有的（默认）

// Private 修饰的属性或方法是私有的（不能在声明它的类的外部调用）

// Protected 修饰的属性或方法是受保护的（它的子类可以访问属性和方法）

// readonly 只能读，不能写

// 创建类
class Animal {
  readonly name: string
  constructor(name) {
    this.name = name
  }

  private run() {
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
snake.name = '123'
console.log(snake.run())

// 类的继承
// class Dog extends Animal {
//   bark() {
//     return `${this.name} is barking`
//   }
// }

// const xiaobao = new Dog('xiaobao')
// console.log('xiaobao.run()', xiaobao.run())
// console.log('xiaobao.bark()', xiaobao.bark())

// // 多态
// class Cat extends Animal {
//   static categories = ['mammal']
//   // 重写constructor
//   constructor(name) {
//     super(name)
//     console.log('this.name', this.name)
//   }

//   // 重写run
//   run() {
//     return `Meow, ` + super.run()
//   }
// }

// const maomao = new Cat('maomao')
// console.log('maomao.run()', maomao.run())
// console.log(Cat.categories)
// // 类上面的属性和方法 静态属性
