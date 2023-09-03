//? Defining Functions with Typed Parameters and Return Values:

function add(a:number, b:number): number {
    return a+b;
}

const result: number = add(2,3);

//? Arrow Functions:

const multiply = (a:number, b:number): number => a*b;

//? Optional Parameters:

function printName(first_name:string, last_name?:string): void {
    if(last_name !== undefined){
        console.log(`${first_name} ${last_name}`);
    } else {
        console.log(`${first_name}`);
    }
}

printName("John", "Doe");
printName("John");

//? Default Parameters:

function printName1(first_name:string, last_name:string = "Smith"): void {
    console.log(`${first_name} ${last_name}`);
}
console.log("Default Parameters:");
printName1("John", "Doe");
printName1("John");

//? Rest Parameters:

function printNames(first_name:string, ...rest_of_names:string[]): void {
    console.log(`${first_name} ${rest_of_names.join(" ")}`);
}

console.log("Rest Parameters:");
printNames("John", "Doe", "Smith", "Anderson");

//? Function Overloading:

/*
? Function overloading is a feature that allows us to define multiple
? functions with the same name and different signatures.
? The compiler will select the appropriate function to invoke based on
? the number of arguments passed to the function.
*/
 ̰
function add1(a:number, b:number): number;
function add1(a:string, b:string): string;

function add1(a:any, b:any): any {
    return a+b;
}

console.log("Function Overloading:");
console.log(add1(2,3));
console.log(add1("Hello", "World"));

//? Classes and Constructors:

/* 
? A class is a blueprint for creating objects
? with predefined properties and methods.
? A class encapsulates data for the object.
? Classes are declared using the class keyword.

? A constructor is a special method that is invoked
? when an object is instantiated from a class.
? The constructor method is used to initialize
? the properties of an object.

? The constructor method is always named constructor.
? A class can have only one constructor.
*/

class Person {
    constructor(public name: string, public age: number) {}

    greet(): string{
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
}

console.log("Classes and Constructors:");
const person1 = new Person("Alice", 30);
console.log(person1.greet());

//? Inheritance:

/*
? Inheritance is a feature that allows a class to inherit
? properties and methods from another class.
? The class that inherits properties and methods is called
? a derived class or child class.
? The class from which the properties and methods are inherited
? is called a base class or parent class.
? Inheritance is declared using the extends keyword.
*/

class Student extends Person {
    constructor(name:string, age:number, public studentId)
}


