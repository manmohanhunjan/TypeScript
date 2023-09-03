//? Variables and Data Types:

let age:number = 25; //Declaring a variable of type number
const my_name:string = "John"; //Declaring a variable of type string   

//? Type Annotations:

function greet(my_name:string): void {
    console.log(`Hello, ${my_name}`);
}

let count: number = 10;

//? Type Inference:

let age1 = 25; //Type inferred as 'number'
const username = "Alice"; //Type inferred as 'string'

//? Type Aliases and Union Types:

type Point = {
    x: number;
    y: number;
};

const origin1: Point = {
    x:0,
    y:0
}

type Result = string | number;

function printResult(result:Result) {
    console.log(result);
}
    
printResult("Success!");
printResult(100);