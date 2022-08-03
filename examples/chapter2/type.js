var isDone = false;
var decLiteral = 20;
var hexLiteral = 0x14;
var binaryLiteral = 20;
var octalLiteral = 20;
var firstname = 'le';
var age = 20;
var sentence = "My name is ".concat(firstname, " and I am ").concat(age, " years old.");
var list = [1, 2, 3];
var list1 = [1, 2, 3];
// 元祖（元素数量和类型都定义的数组）
var x = ['age', 20];
// 新版本的元祖已不支持
// x[3] = 'Age'
// 错误
// let x: [string, number] = [20, 'age']
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
// 编译后
//var Color;
// (function (Color) {
//     Color[Color["Red"] = 0] = "Red";
//     Color[Color["Green"] = 1] = "Green";
//     Color[Color["Blue"] = 2] = "Blue";
// })(Color || (Color = {}));
// var colorName = Color[2];
// console.log(colorName);
var a;
a = 4;
a = '4';
var list2 = [1, '2', true];
function fn() { }
function fn1() {
    throw new Error("fn");
}
var someValue = 'apple';
var valueLength = someValue.length;
