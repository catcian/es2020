// let const 
// {
//   let a = 1
//   console.log('a', a)
// }

// console.log('a', a)// ReferenceError: a is not defined

// var b = 3
// let c = 4

// let var 区别 1：let 声明变量不能用全局变量的属性进行访问
// console.log('b', b, 'c',c)
// console.log('window.b',window.b,'window.c', window.c)// window.b 3 window.c undefined

// 区别 2：let 声明的变量不能进行重复定义变量
// var b = 4
// console.log('b', b)// b 4

// let c = 5
// console.log('c', c) // Uncaught SyntaxError: Identifier 'c' has already been declared

// 区别 3： let 变量不会进行变量提升

// const 只能定义常量，不能进行修改，具备let 的区别
// 区别 1: const 声明变量不能进行修改
// const a = 2 
// a = 3// Uncaught TypeError: Assignment to constant variable.
// console.log('a',a)

// 区别 2: 初始化需要被声明
// const b // Uncaught TypeError: Assignment to constant variable.
// b = 3


// test 1
// console.log(a)// Uncaught ReferenceError: Cannot access 'a' before initialization
// let a = 1

// test 2
// console.log('i forb', i)
for( var i = 0; i < 3; i++){
  console.log('i for', i )
  setTimeout(function(){
    console.log('i',i)
  }, 1000)
}
// console.log('i fora', i)
// var 声明变量不具备快状作用域， 所以 i一直是1个