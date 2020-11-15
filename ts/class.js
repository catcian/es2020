// 面向对象（OOP）三大特性： 封装、继承、多态

// 创建类
/* 
class Animal {
  constructor(name){
    this.name = name
  }

  run(){
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
console.log(snake.run())
 */
// // 类的继承
/* 
class Dog extends Animal {

  bark(){
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')
console.log('xiaobao.run()', xiaobao.run())
console.log('xiaobao.bark()', xiaobao.bark())
 */

// 多态
/* 
class Cat extends Animal {
  static categories = ['mammal']
  // 重写constructor
  constructor(name){
    super(name)
    console.log('this.name',this.name)
  }

  // 重写run
  run(){
    return `Meow, `+ super.run()
  }
}

const maomao = new Cat('maomao')
console.log('maomao.run()', maomao.run())
console.log(Cat.categories)
 */
// 类上面的属性和方法 静态属性