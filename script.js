// ** Always push this command at the end of your day
// **  git add.
// **  git commit -m "initial commit"
// **  git push origin main





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
//     console.log("Hello Abhishekkkkkkkkkkkkkkkkkkkkkk");                                   // ** function declaration is hoisted
// }

// abcd2() // ** TypeError: abcd2 is not a function
// var abcd2 = function () {                                                                 // ** function expression is not hoisted
//     console.log("Hello Abhishekkkkkkkkkkkkkkkkkkkkkk");
// }


// ** question for function

// ** what does ... operator do in function parameters ?
// it is called rest operator and it is used to accept an indefinite number of arguments as an array

// function sum(...val) {
//     console.log(val);
// }

// sum(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// ** use rest parameter to accept the numbers and return their total

// function sum(...val) {
//     let total = 0
//     val.forEach(function (e) { // forEach is a higher order function
//         total = total + e
//     })
//     console.log(total);
// }

// sum(1, 2, 3, 4, 5); // 15



// function discountCalculator(discount) {
//     return function (price) {
//         return price - price * (discount / 100)
//     }
// }

// let ten = discountCalculator(10) // 10% discount
// let twenty = discountCalculator(20) // 20% discount

// console.log(ten(1000)); // 900
// console.log(twenty(1000)); // 800



// ** ARRAYS


let abhi = [1, 2, 3, 4, 5] // array literal syntax


// console.log(abhi, "Original array");
// console.log(abhi);
// console.log(abhi[0]); // 1  indexing 0
// console.log(abhi[1]); // 2  indexing 1
// console.log(abhi[2]); // 3  indexing 2

// console.log(abhi[10]) // ** undefined as there is no element at index 10

// abhi[2] = 12 //**  updating the value at index 2
// console.log(abhi); //**  [1, 2, 12, 4, 5]

// abhi.push(6) // ** adding an element at the end of the array
// abhi.pop(4) // ** removing an element from the end of the array
// abhi.shift() // ** removing an element from the start of the array
// abhi.unshift(0) // ** adding an element at the start of the array

// ** splice and slice
// defination of splice and slice
// ** splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// ** slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// abhi.splice(2, 0, 3) // ** adding an element at index 2 , 0 means no element will be removed, 3 is the element to be added
// abhi.splice(2, 2 , 5) // ** removing 2 elements from index 2

// let newArr = abhi.slice(1, 4) // ** returns a new array from index 1 to index 4 (4 is not included)
// console.log(newArr); // ** [2, 3, 4]  original array is not modified

// abhi.reverse() // ** reverses the array
// let ar = abhi.sort(function (a, b) {
//     return a - b

// }) // ** sorts the array in ascending order

// console.log(ar);

// let arrr = abhi.sort(function (a, b) {
//     return b - a
// }) // ** sorts the array in descending order

// console.log(arrr);

// console.log(abhi);


// ** ForEach loop in array

// abhi.forEach(function (val) {
//     console.log(val + 5)
// })


// ** Map function in array
// ** map sird tab use krte hai jb hume array ke har element ko modify krna ho aur naya array  return krna ho

//  **map dikhte hi saath mei ek naya array bana lia karo

// let newArr = abhi.map(function (val) {
//     return val + 5
// })

// console.log(newArr); // ** [6, 7, 8, 9, 10] original array is not modified
// console.log(abhi); // ** [1, 2, 3, 4, 5] original array is not modified

// let newArr = abhi.map((val) => {
//     if (val > 2) return val * 2
//     else return val
// })

// console.log(newArr); // ** [1, 2, 6, 8, 10] original array is not modified
// console.log(abhi); // ** [1, 2, 3, 4, 5] original array is not modified


// ** Jab bhi apko aisa koi case dikh jaye jaha par ek arrau se naya aaray banana ho and agar wo naya array kuch values ko rakhega tab map lagega




// ** Filter function in array
// ** filter sird tab use krte hai jb hume array ke kuch elements ko filter krna ho aur naya array return krna ho

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newArr = arr.filter(function (val) {
//     if (val > 5) return val
// })

// console.log(newArr); // ** [6, 7, 8, 9, 10] original array is not modified




// ** reduce function in array
// ** reduce sird tab use krte hai jb hume array ke sare elements ko ek single value mei convert krna ho

// let arr = [1, 2, 3, 4, 5]
// let ans = arr.reduce(function (accumlator, val) {
//     return accumlator + val
// }, 0) //** 0 is the initial value of accumlator

// console.log(ans); // ** 15 original array is not modified
// ** accumlator is the value returned by the previous iteration
// ** val is the current element of the array


// **  Find function in array
// ** find sird tab use krte hai jb hume array ke kuch elements ko filter krna ho aur ek single value return krna ho






// ** Destructing in JavaScript
// ** Destructuring assignment is a special syntax in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables.

// let arr = [1, 2, 3, 4, 5]
// let [a, b, c, d, e] = arr // array destructuring
// console.log(a, b, c, d, e); // 1 2 3 4 5

// let obj = {
//     name: "Abhishek",
//     age: 24,
//     city: "Bhopal"
// }

// let { name, age, city } = obj // object destructuring
// console.log(name, age, city); // Abhishek 21 Bhopal







// Arrays questions

// 1. create an array with 3 fruits and prints the second fruit

let arr = ["apple", "banana", "mango"]
// console.log(arr[1]);

// 2. add a fruit to the end of the array and at the beginning of the array and print the array

// arr.push("orange")
// arr.unshift("grapes")
// console.log(arr);


// 3. replace "BAnana " with "Kiwi" and print the array

// arr[1] = "kiwi"
// console.log(arr);

// 4. remove the last fruit from the array and print the array

// arr.pop()
// console.log(arr);


// insert 'red' and 'blue' at index 1 and 2 respectively and print the array

// arr.splice(2, 0, 'red', 'blue')
// console.log(arr);

// 6. create a new array with the first 3 fruits of the original array and print the new array

// let newArr = arr.slice(0, 3)
// console.log(newArr);




//**  Objects in JavaScript
// ** Objects are used to store multiple values in a single variable
// ** Objects are key-value pairs
// ** Keys are always strings
// ** Values can be of any data type
// let student = {
//     name: "Abhishek",
//     greet: function () {
//         console.log("Hello " + this.name);
//     },
//     age: 24,
//     city: "Bhopal",
//     isMarried: false,
//     skills: ["JavaScript", "React", "Node.js"],
//     address: {
//         street: "123 Main St",
//         city: "Bhopal",
//         state: "MP"
//     }
// }

// student.greet(); // Hello Abhishek
// newStudent.greet()

// student.sex = 'Male'
// student.age = 30
// delete student.sex

// console.log(student);

// console.log(student); // ** prints the entire object
// console.log(student.skills[1]) // ** prints the second skill
// console.log(student.address.city) // ** prints the state from address object
// console.log(student["name"]); // ** prints the name using bracket notation
// console.log(student["address"]["state"]); // ** prints the state from address object using bracket notation

// let newStudent = {
//     ...student
// } // ** spread operator to copy the object

// newStudent.name = "Rohit"
// console.log(student);
// console.log(newStudent);

// let student = {
//     name: "Abhishek",
//     age: 24,
//     address: {
//         city: "Bhopal"
//     }
// };

// let copy1 = {
//     ...student
// };
// copy1.name = "Rohit";
// copy1.address.city = "Delhi";

// console.log(student)
// console.log(student.name); // Abhishek
// console.log(student.address.city); // Delhi ⚠️ (nested object shared)
// console.log(copy1)

// console.log(Object.keys(student)) // array of keys
// console.log(Object.values(student)) // array of values
// console.log(Object.entries(student)) // 2D array of key value pairs output ? // [ [ 'name', 'Abhishek' ], [ 'age', 24 ], [ 'address', { city: 'Bhopal' } ] ]

// console.log("name" in student) // ** false // true if key is present in object

// console.log("city" in student.address) // ** true


//** Merging objects

// let a = {
//     x: 1
// }
// let b = {
//     y: 2
// }
// let c = {
//     z: 3
// }
// let d = {
//     ...a,
//     ...b,
//     ...c
// }

// console.log(d)

// d.e = 4
// console.log(d)




// ** Object destructuring
// ** Destructuring assignment is a special syntax in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables.
// let student = {
//     name: "Abhishek",
//     age: 24,
//     address: {
//         city: "Bhopal",
//         state: "MP"
//     }
// };

// let {
//     name,
//     age,
//     address: {
//         city,
//         state
//     }
// } = student // object destructuring
// console.log(name, age, city, state); // Abhishek 24 Bhopal MP
// console.log(student); // original object is not modified

// ** 1.  What is an object in JavaScript ?
// ** Objects are used to store multiple values in a single variable
// ** Objects are key-value pairs
// ** Keys are always strings
// ** Values can be of any data type

// ** 2. Difference between dot notation and bracket notation in objects ?
// ** Dot notation is used to access the properties of an object using the dot operator (.) followed by the property name
// ** Example:
// student.name = "Rohit";



// ** Bracket notation is used to access the properties of an object using square brackets ([]) and the property name as a string
// ** Example:
// student["name"] = "Rohit";


// ** 3. How do you delete a property from an object ?
// ** You can delete a property from an object using the delete operator followed by the object name and the property name
// ** Example:
// delete student.age;

// ** 4. Difference between object and array in JS.?
// ** Objects are used to store multiple values in a single variable as key-value pairs
// ** Arrays are used to store multiple values in a single variable as a list of values

// ** 5. How do you check if a property exists in an object? (in vs hasOwnProperty)
// ** You can check if a property exists in an object using the in operator or the hasOwnProperty method
// ** Example:
// console.log("name" in student); // true
// console.log(student.hasOwnProperty("name")); // true

// **6. Difference between Object.keys(), Object.values(), and Object.entries().
// ** Object.keys() returns an array of the object's own property names
// ** Object.values() returns an array of the object's own property values
// ** Object.entries() returns an array of the object's own key-value pairs as arrays


// ** 7.What are computed property names in objects?
// ** Computed property names allow you to use an expression as the property name in an object literal
// ** Example:
// let prop = "name";
// let student = {
//     [prop]: "Abhishek" // computed property name
// };
// console.log(student.name); // Abhishek

// **8.How do you merge two or more objects? (Object.assign vs spread operator).
// ** You can merge two or more objects using the Object.assign() method or the spread operator
// ** Example using Object.assign():
// let obj1 = { a: 1 };

// let obj2 = { b: 2 };
// let mergedObj = Object.assign({}, obj1, obj2); // merging obj1 and obj2 into a new object
// console.log(mergedObj); // { a: 1, b: 2 }

// ** Example using spread operator:
// let obj1 = { a: 1 };
// let obj2 = { b: 2 };
// let mergedObj = { ...obj1, ...obj2 }; // merging obj1 and obj2 into a new object
// console.log(mergedObj); // { a: 1, b: 2 }





// ** DOM
// ** 1.What is the DOM ? Difference between DOM and BOM ?
// ** DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
// ** BOM (Browser Object Model) is a programming interface for web browsers. It represents the browser window and provides methods to interact with the browser, such as opening new windows, navigating to different URLs, and getting information about the browser.

// ** The main difference between DOM and BOM is that DOM is used to interact with the document (web page) while BOM is used to interact with the browser (window).




// ** 2. Difference between NodeList and HTMLCollection?
// ** NodeList is a collection of nodes returned by certain DOM methods (e.g., querySelectorAll). It is a static collection, meaning it does not automatically update when the document changes.

// ** HTMLCollection is a collection of HTML elements returned by certain DOM methods (e.g., getElementsByTagName). It is a live collection, meaning it automatically updates when the document changes.




// ** 3. How to select elements in the DOM ?
// ** You can select elements in the DOM using various methods such as:
// ** getElementById(): Selects an element by its ID
// ** getElementsByClassName(): Selects elements by their class name
// ** getElementsByTagName(): Selects elements by their tag name
// ** querySelector(): Selects the first element that matches a CSS selector
// ** querySelectorAll(): Selects all elements that match a CSS selector


// ** Example:
// let elementById = document.getElementById("myId");
// let elementsByClassName = document.getElementsByClassName("myClass");
// let elementsByTagName = document.getElementsByTagName("div");
// let firstElementBySelector = document.querySelector(".myClass");
// let allElementsBySelector = document.querySelectorAll(".myClass");





// ** 4. Difference between event.target and event.currentTarget?
// ** event.target refers to the element that triggered the event (the actual element that was clicked, hovered, etc.)

// ** event.currentTarget refers to the element that the event listener is attached to (the element that is currently handling the event)




// ** 5. What is event delegation in JavaScript? Example?

// ** Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching multiple event listeners to individual child elements. This is useful when you have a large number of child elements or when child elements are added dynamically.


// ** Example:
// document.getElementById("parent").addEventListener("click", function(event) {
//     if (event.target.matches(".child")) {
// Handle click event for child elements
//         console.log("Child element clicked:", event.target);
//     }
// });

// In this example, a single click event listener is attached to the parent element with the ID "parent". When any child element with the class "child" is clicked, the event listener checks if the clicked element matches the selector and handles the event accordingly. This way, you don't need to attach separate event listeners to each child element.

// ** 6. Explain capturing vs bubbling in event propagation.
// ** Capturing and bubbling are two phases of event propagation in the DOM.
// ** Capturing (or capture) phase: The event starts from the root and travels down to the target element. This phase allows you to intercept the event before it reaches the target.
// ** Bubbling phase: The event starts from the target element and travels up to the root. This is the default phase for most events, and it allows parent elements to handle events triggered by their children.



// ** 7.How to remove an element from the DOM dynamically?
// ** You can remove an element from the DOM dynamically using the remove() method or by using the parentNode.removeChild() method.
// ** Example using remove():
// let element = document.getElementById("myElement");
// element.remove(); // removes the element from the DOM























// **  Scope Execution context and closure

// ** Scope
// scope Matlab ki app apne created variables and function ko kha tak use kar sate hai

// 1. Global scope
// 2. Local scope
// 3. Block scope

// function scope - function ke ander hi use ho sakta hai
// block scope - {} ke ander hi use ho sakta hai
// global scope - pure code mei kahi bhi use ho sakta hai

// var a = 10 // global scope

// function abhishek() {
//     var b = 20 // function scope
//     if (true) {
//         let c = 30 // block scope
//         console.log(c); // 30
//     }
//     // console.log(c); // error c is not defined
//     console.log(b); // 20
// }        
// abhishek();
// console.log(a); // 10
// console.log(b); // error b is not defined