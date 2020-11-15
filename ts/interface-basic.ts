interface IPerson {
  // 名字建议前加I
  readonly id: number // 只读属性
  name: string
  age?: number // ？可选属性，可以添加也可以不写
}

let viking: IPerson = {
  id: 1,
  name: 'viking',
  age: 20,
}

viking.id = 9527
