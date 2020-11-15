// console.log(123)
// 全局变量
// var abc = 1234

// 具备全局作用域 window的属性
// abcd = 2345

// 函数内部没有定义的变量
// function test() {
//   ab = 45
// }
// test()

// 函数作用域 内部定义的变量 局部作用域
// 希望变量屏蔽在函数内部，同时函数内部的值期望被外部共享？
// 1. return 内部变量的值
// 2. 闭包

function test1(){
  var a = 3
  
  function test2(){
    var b = 4
    // 作用域链 一层一层往上找
    return  a + b + c
  }
  // 闭包
  return test2
}


function test(){
  var a = 3
  // 块状作用域
  if( a === 3){

    // var b = 4
    // ES6 块状作用域
    let b = 4
    console.log('abc')
  } else {

    console.log('abcd')
  }

  // var 变量声明的可以访问到
  // console.log('b', b)// b is not defined
  return a + 4
}

// console.log('test()', test())
// console.log(a)// ReferenceError: a is not defined


// js变量提升： var 声明的变量都存在变量提升，只要在函数静态扫描中遇到 var b ,在函数内部顶层进行声明
function test2 (){
  var a = 3
  // var b TODO

  function test1(){
    var b = 4 // var b = 4 -> b = 4
  }

}


// 动态作用域
// this

window.a = 3

function testThis (){
  console.log('this.a', this.a)
}

testThis()
testThis.bind({a: 100})()