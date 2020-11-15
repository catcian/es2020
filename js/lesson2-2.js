// ES5
// for 循环
const arr = [1,2,3,4,5] 

for(let i = 0; i < arr.length; i++){
  // 如果循环到2退出遍历
  if(arr[i] === 2){
    continue
  }
  // console.log('arr[i]',arr[i])
}

// forEach
arr.forEach(function(val){
  // 如果循环到2退出遍历
  if(val === 2){
    // continue
  }
  // console.log('forEach',val)
})

/**
 * 区别：
 * for 循环中 continue break， forEach 不支持
 * 
 */

 // every
 arr.every(function(val){
    // 遇到2退出
    if( val === 2){
      return false
    }
    // console.log('every', val)
    return true
 })

 // for in 为Object设计
 /**
  * for in 遍历数组的原因？
  * 1. 数组也是对象的一种，
  * 2. 数组是可以遍历的
  * 
  * 可遍历的：
  */

  // 自定义属性
  // arr.a = 8
 for(let index in arr){
   if(+index === 2) {// typeof index -> string
     continue
   }
  //  console.log('index',index, 'arr[index]', arr[index])
 }

 // ES6
 // for of
 /**
  * 除了数组、对象之外的可遍历的自定义数据结构
  */
 for (let item of arr) {
  //  console.log('item',item)
 }
 
 /**
  * 查找最便宜的商品，最便宜的啤酒A,最便宜的火腿肠B,最便宜的打火机C
  */
 const Price = {
  A: [1.5, 2.3, 4.5],
  B: [3,4,5],
  C: [0.5,0.8,1.2]
 }
