// 原始数据类型
let isDone: boolean = false

let age: number = 10

let firstName: string = 'viking'

let message: string = `Hello, ${firstName}`

let u: undefined = undefined

let n: null = null

let num: number = undefined

// 系统介入第三方系统，无法确认什么类型
// any 类型
let notSure: any = 4
notSure = 'maybe a string'
notSure = true

notSure.myName
notSure.getName()
