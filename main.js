// function log(message) {
//     console.log(message);
// }
// var message = "Hello World";
// log(message);
/*
? Variable Declaration
*/
// function doSomething() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }
/*
? Type
*/
// let count = 5;
// count = 'a';
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
; //What is enum? It is a way of giving more friendly names to sets of numeric values. 
//more simpler enum definition is enum Color {Red, Green, Blue}; //It will automatically assign 0, 1, 2 to the enum members.
//what if we give a value to the first member of the enum? enum Color {Red = 0, Green, Blue}; //It will automatically assign 0, 1, 2 to the enum members.
//what if we give a value to the second member of the enum? enum Color {Red = 0, Green = 2, Blue}; //It will automatically assign 0, 2, 3 to the enum members.
var backgroundColor = Color.Red;
console.log(backgroundColor);
