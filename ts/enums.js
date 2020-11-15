// 1. 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0 node 13.13.0 npm 6.14.4 不支持 reserved word 保留关键字 (node 12.5.0 npm 6.9.0) ts-node enums.ts tsc enums.ts
console.log(Direction[0]); // Up
// 2. 字符串枚举
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "UP";
    Direction1["Down"] = "DOWN";
    Direction1["Left"] = "LEFT";
    Direction1["Right"] = "RIGHT";
})(Direction1 || (Direction1 = {}));
var value = 'UP';
if (value === Direction1.Up) {
    console.log('go up');
}
if (value === "UP" /* Up */) {
    console.log('go up');
}
