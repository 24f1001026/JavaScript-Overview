// Data Type Conversion in JavaScript
// In JavaScript, you can convert values from one data type to another using built-in functions. The most common conversions are to and from strings and numbers.

// In Number conversion, JavaScript will try to convert a value to a number. Here are some examples of how different values are converted to numbers:

let marks = 56.78;
console.log(typeof marks); // Output: "number"
console.log(typeof(marks)); // Output: "number"



let score = "56.78";
console.log(typeof score); // Output: "string"
console.log(typeof(score)); // Output: "string"

valueInNumber = Number(score);   // Converts the string "56.78" to the number 56.78
console.log(typeof valueInNumber); // Output: "number"


let value = "234abc";
let convertedValue = Number(value); // This will result in NaN (Not a Number) because "234abc" cannot be fully converted to a number

console.log(convertedValue); // Output: NaN
console.log(typeof convertedValue); // Output: "number"



let value2 = null;
let convertedValue2 = Number(value2); // This will convert null to 0
console.log(convertedValue2); // Output: 0
console.log(typeof convertedValue2); // Output: "number"



let vaslue3 = undefined;
let convertedValue3 = Number(vaslue3); // This will convert undefined to NaN

console.log(convertedValue3); // Output: NaN
console.log(typeof convertedValue3); // Output: "number"

let isTrue = true;
let convertedIsTrue = Number(isTrue); // This will convert true to 1

let isFalse = false;
let convertedIsFalse = Number(isFalse); // This will convert false to 0

console.log(typeof convertedIsTrue); // Output: "number"
console.log(convertedIsTrue); // Output: 1
console.log(typeof convertedIsFalse); // Output: "number"
console.log(convertedIsFalse); // Output: 0

// P.S.
// "33" => 33
// "33abc"  => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

// Boolean conversion in JavaScript will convert a value to a boolean (true or false) based on its "truthiness". Here are some examples of how different values are converted to booleans:

// number to boolean
let isloggedIn = 1;
let booleanIsLoggedIn = Boolean(isloggedIn); // This will convert 1 to true

console.log(typeof booleanIsLoggedIn); // Output: "boolean"
console.log(booleanIsLoggedIn); // Output: true

let isloggedOut = 0;
let booleanIsLoggedOut = Boolean(isloggedOut); // This will convert 0 to false
console.log(typeof booleanIsLoggedOut);
console.log(booleanIsLoggedOut); // Output: false


// string to boolean
let userName = "Ayush";
let booleanUserName = Boolean(userName); // This will convert the non-empty string "Ayush" to true

console.log(typeof booleanUserName); // Output: "boolean"
console.log(booleanUserName); // Output: true

let emptyString = "";
let booleanEmptyString = Boolean(emptyString); // This will convert the empty string "" to false
console.log(typeof booleanEmptyString); // Output: "boolean"
console.log(booleanEmptyString); // Output: false

let specedString = " ";
let booleanSpecedString = Boolean(specedString); // This will convert the string with a space " " to true
console.log(typeof booleanSpecedString); // Output: "boolean"
console.log(booleanSpecedString); // Output: true


// P.S. 
// 1 => true , 0 => false
// non-empty string => true  eg . "Batman" => true  , " " => true (a string with a space is considered non-empty)
// empty string => false  e.g. "" => false



// string conversion : 

let num1 = 45;
let stringNum1 = String(num1);
console.log(typeof stringNum1);
console.log(stringNum1)







