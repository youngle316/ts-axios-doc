let isDone: boolean = false;

let decLiteral: number = 20;
let hexLiteral: number = 0x14;
let binaryLiteral: number = 0b10100;
let octalLiteral: number = 0o24;

let firstname: string = 'le';
let age: number = 20;
let sentence: string = `My name is ${firstname} and I am ${age} years old.`;

let list: number[] = [1 ,2, 3];
let list1: Array<number> = [1, 2, 3];

// 元祖（元素数量和类型都定义的数组）
let x: [string, number] = ['age', 20]
// 新版本的元祖已不支持
// x[3] = 'Age'

// 错误
// let x: [string, number] = [20, 'age']

enum Color {
  Red,
  Green,
  Blue
}
let colorName: string = Color[2];
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

let a: any;
a = 4;
a = '4';

let list2: any[] = [1, '2', true]

function fn(): void {}

function fn1 (): never {
  throw new Error("fn")
}

declare function fn2 (): void

let someValue: any = 'apple';
let valueLength: number = (someValue as string).length;
