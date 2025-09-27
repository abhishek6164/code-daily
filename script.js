// function abhishek() {
//    console.log("Hello Abhishek");
// }

// abhishek();


//  ** function statements **
// function abhishek() {

// }
// abhishek();



//  ** function expression **
// let abhishek = function () {
//     console.log("Hello Abhishek");
// }

// abhishek();


//  ** fat arrow function **
// let abhishek = () => {
//     console.log("Hello Abhishek");
// }
// abhishek();

//  ** fat arrow function with parameters **
// let abhishek = (name) => {
//     console.log("Hello " + name);
// }
// abhishek("Abhishek");



// function abhishek(name) {
//     console.log("Hello" + name)

// }

// abhishek(" Abhishek");

// function dance(name) {
//     console.log(`${name} is dancing`);
// }

// dance("Abhishek");
// dance("Rohit");
// dance("Shubham");
// dance("Sagar");
// dance("Ankit");
// dance("Ravi");


// function sum(a, b) {   // ** (a, b) are parameters
//     console.log(a + b);
// }

// sum(2, 3); // ** (2, 3) are arguments
// sum(5, 6);
// sum(10, 20);
// sum(100, 200);
// sum(1000, 2000);


// ** Default Parameters in function
// ** Definition of default parameters
// ** Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.

// function sum(a = 0, b = 0) { // (a, b) are parameters
//     console.log(a + b);
// }
// sum(2, 3); // (2, 3) are arguments

// sum(5); // b will take default value 0
// sum(); // both a and b will take default value 0
// sum(10, 20);
// sum(100, 200);
// sum(1000, 2000);

// ** rest operation in function
// ** The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
// ** providing a way to represent variadic functions in JavaScript.
// function arr(...args) { // args is an array of all arguments passed
//     console.log(args);
//     console.log(args[0]);
//     console.log(args[1]);
//     console.log(args[2]);
//     console.log(args[3]);
//     console.log(args[4]);
// }

// arr(1, 2, 3, 4, 5, 6, 7, 8, 9);



// ** First class functions
// ** In JavaScript, functions are first-class citizens.
// ** This means that functions can be treated like any other value.
// ** They can be assigned to variables, passed as arguments, and returned from other functions.

// function sum(a, b) {
//     return a + b;
// }

// let add = sum; // function is assigned to a variable
// console.log(add(2, 3)); //**   function is called using the variable


// function calculator(num1, num2, operator) { // operator is a function
//     return operator(num1, num2); // function is called
// }

// console.log(calculator(2, 3, sum)); // ** function is passed as an argument

// console.log(calculator(2, 3, function (a, b) { // ** anonymous function is passed as an argument
//     return a - b;
// }));



// ** Higher order functions
// ** hof are the  function which accepts function as a parameter or returns a function or both

// function abcd() {
//     return function () {
//         console.log("Hello Abhishek");
//     }
// }

// abcd()(); // calling the function returned by abcd

// ** foreach is a higher order function
//     let arr = [1, 2, 3, 4, 5];
// arr.forEach(function (element) { // function is passed as an argument
//     console.log(element);
// });


// ** pure vs impure functions
//**pure function: A pure function is a function that, given the same input, will always return the same output and does not have any side effects(it does not modify any external state or variables).

//**impure function: An impure function is a function that may produce different outputs for the same input or has side effects (it modifies external state or variables).

// let a = 10

// function abhishek() {
//     console.log(a);
// }

// function abhishek2() {
//     a++
// }

// abhishek(); // ** 10 pure function as it does not change the value of a
// abhishek2(); // ** 12  impure function as it changes the value of a



// ** closures in JavaScript
// ** A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and parameters, even after the outer function has returned.

// ** ek function jo return karega ek aur function aur return hone wala function hamesha use karega wo variable jo uske parent function ke andar defined hai

// ** closure ke 3 scope hote hai
// ** 1. apna scope (local scope)
//  ** 2. parent function ka scope
// ** 3. global scope

// function abcd() {
//     let a = 10
//     return function () {
//         console.log(a);
//     }
// }


// ** lexical scoping
// ** Definition: Lexical scoping refers to the way variable scope is determined in a programming language based on the physical structure of the code (its layout and indentation) rather than the runtime behavior of the code. In languages with lexical scoping, a variable's scope is defined by its location within the source code, and nested functions have access to variables declared in their outer (enclosing) functions.

// function abcd() {
//     let a = 10
//     // console.log(b); // undefined as b is not defined in this scope
//     return function () {
//         let b = 20
//         console.log(a,b);
//         return function () {
//             let c = 30
//             console.log(a, b, c);
//         }
//     }
// }

// abcd()()(); // calling the function returned by abcd



// ** IFFI (Immediately Invoked Function Expression)
// ** it is a way to create a function and Immediately execute it without needing to call it later


// (function () {
//     console.log("Hello Abhishek");
// })(); // function is called immediately after its definition

// (function (name) {
//     console.log("Hello " + name);
// })("Abhishek"); // function is called immediately after its definition with argument


// ** Hoisting in JavaScript
// ** Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed. This means that you can use variables and call functions before they are actually declared in the code.

// console.log(abc); // undefined due to hoisting
// var abc = 10;

// abcd()

// function abcd() {
//     console.log("Hello Abhishekkkkkkkkkkkkkkkkkkkkkk");    // ** function declaration is hoisted
// }

// abcd2() // ** TypeError: abcd2 is not a function
// var abcd2 = function () {   // ** function expression is not hoisted
//     console.log("Hello Abhishekkkkkkkkkkkkkkkkkkkkkk");
// }


