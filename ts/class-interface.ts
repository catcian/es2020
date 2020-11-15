// 学会用interface implements 来抽象类的属性和方法！
// 不同类可以继承多个接口
interface IRadio {
  switchRadio(trigger: boolean): void
}

interface IBattery {
  checkBatteryStatus(): void
}

//接口之间可以继承
interface IRadioWithBattery extends IRadio {
  checkBatteryStatus(): void
}

// 汽车 收音机
class Car implements IRadio {
  switchRadio(trigger: boolean) {}
}

// 手机 收音机 检查电池的容量
// class CellPhone implements IRadio, IBattery {
class CellPhone implements IRadioWithBattery {
  switchRadio(trigger: boolean) {}

  checkBatteryStatus() {}
}

//
