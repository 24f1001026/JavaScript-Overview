"use strict" ;  // Treat all JavaScript code as modern and secure, preventing the use of certain features and behaviors that can lead to bugs or security issues.



// alert("Welcome to JavaScript Data Types!");  // Display an alert message to the user when the script is loaded.

// alert use syntax in node : 
// In Node.js, you can use the `alert` function by installing a package called `alert-node`. Here's how you can do it:
// 1. Install the `alert-node` package using npm:
// npm install alert-node
// 2. Use the `alert` function in your Node.js script:
// const alert = require('alert-node');
// alert('Welcome to JavaScript Data Types!');  // Display an alert message to the user when the script is executed in Node.js.


// console.log(6+6)   console.log(5+4) // error because of missing semicolon, it is recommended to use semicolons to avoid such issues and improve code readability.

console.log(6+6)  ; console.log(5+4)

// Data types in JavaScript: 
// number => 2 to power 53 
// bigint => 2 to power 1024
// string => ""
// Boolean => true or false
// null => standalone value that represents the absence of any object value
// undefined => a variable that has been declared but has not been assigned a value
// symbol => a unique identifier 

// object => a collection of key-value pairs, it can represent complex data structures
// array => a special type of object that represents an ordered list of values



// 1. Primitive data types:
//    - String: A sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). Example: "Hello, World!"

let name = "Ayush" // name is a variable of type string
console.log(name)

//    - Number: Represents both integer and floating-point numbers. Example: 42, 3.14
let age = 20 // age is a variable of type number
console.log(age)

//    - Boolean: Represents a logical value that can be either true or false. Example: true, false
let isGraduated = false // isGraduated is a variable of type boolean
console.log(isGraduated)

//    - Null: Represents the intentional absence of any object value. It is a primitive value that represents "no value". Example: null
let myJob = null // myJob is a variable of type null
console.log(myJob)


//    - Undefined: Represents a variable that has been declared but has not been assigned a value. It is a primitive value that represents "undefined". Example: undefined
let myCity; // myCity is a variable of type undefined
console.log(myCity)



// 2. Non-primitive data types:
//    - Object: A collection of key-value pairs. It can represent complex data structures. Example: { name: "Alice", age: 30 }

let obj = { name: "Ayush", age: 20, isGraduated: false } // obj is a variable of type object
console.log(obj)
//   - Array: A special type of object that represents an ordered list of values. Example: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 4, 5] // arr is a variable of type array
console.log(arr)

// 3. Symbol: Represents a unique identifier. It is a primitive data type introduced in ES6. Example: Symbol('description')
let sym1 = Symbol('description') // sym1 is a variable of type symbol
let sym2 = Symbol('description') // sym2 is a variable of type symbol
console.log(sym1 === sym2) // false because each symbol is unique, even if they have the same description



// JavaScript is a dynamically typed language, which means that variables can hold values of any data type and can change their type at runtime. For example:
let myVariable
myVariable = "Hello, World!"  // myVariable is now a string
myVariable = 42  // myVariable is now a number
myVariable = true  // myVariable is now a boolean


// typeof operator is used to determine the type of a variable or value. It returns a string indicating the type of the operand. For example:
console.log(typeof 42) // number
console.log(typeof "Hello, World!") // string
console.log(typeof true) // boolean
console.log(typeof null) // object (this is a known quirk in JavaScript, null is actually a primitive value, but typeof returns "object")
console.log(typeof undefined) // undefined because it is a primitive value that represents "undefined"
