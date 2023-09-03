//? Variables and Data Types:
var age = 25; //Declaring a variable of type number
var my_name = "John"; //Declaring a variable of type string   
//? Type Annotations:
function greet(my_name) {
    console.log("Hello, ".concat(my_name));
}
var count = 10;
//? Type Inference:
var age1 = 25; //Type inferred as 'number'
var username = "Alice"; //Type inferred as 'string'
var origin1 = {
    x: 0,
    y: 0
};
function printResult(result) {
    console.log(result);
}
printResult("Success!");
printResult(100);
