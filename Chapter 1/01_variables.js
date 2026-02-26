const accountId = 12345
const accountName = "Ayush kumar singh"
let accountEmail = "kumarayush@gmail.com"
var accountPassword = "12345678"
let accountCity = "Bangalore"
let accountState; // can declare a variable without initializing it, it will be undefined by default


// accountId = 54321   // can't reassign a value to a constant variable
// accountName = "Ayush"   // can't reassign a value to a constant variable
console.log(accountId)
console.log(accountName)


accountEmail = "123@email.com"  // can reassign a value to a let variable
accountPassword = "87654321"  // can reassign a value to a var variable
accountCity = "Mumbai"  // can reassign a value to a let variable
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)


console.table({accountId, accountName, accountEmail, accountPassword, accountCity})

console.log(accountState)  // undefined because it is declared but not initialized

/* prefer not to use var because of its function-scoped nature and hoisting behavior and issue in block scope */

// console.table[] vs console.table{} :
// console.table[] is used to display data in a tabular format when the data is an array of objects. Each object in the array represents a row in the table, and the properties of the objects represent the columns.

// console.table{} is used to display data in a tabular format when the data is an object. Each property of the object represents a column in the table, and the values of the properties represent the rows.



// const vs let vs var : 
// 1. Scope:
//    - const and let are block-scoped, meaning they are only accessible within the block they are defined in (e.g., inside a function, loop, or if statement).

//    - var is function-scoped, meaning it is accessible throughout the entire function in which it is defined, regardless of block boundaries.

// 2. Reassignment:
//    - const variables cannot be reassigned after they are initialized. They must be assigned a value at the time of declaration and cannot be changed later.

//    - let variables can be reassigned after they are initialized. They can be declared without an initial value and assigned later.

//    - var variables can also be reassigned after they are initialized. They can be declared without an initial value and assigned later.


// 3. Hoisting:

//    - var declarations are hoisted to the top of their scope, meaning they can be accessed before they are declared. However, they will be undefined until the line where they are initialized is executed.

//    - const and let declarations are also hoisted, but they are not initialized until their declaration is evaluated. Accessing them before their declaration will result in a ReferenceError.



