/*
To link a .js file in your html file, use the `<script></script>` tag
Example:

<!DOCTYPE html>
<html>
<head>
<body>
	<script src="path/to/script.js"></script>
</body>
</head>
</html>
*/
/**********************************************************************************/

// Objects
// An object in js is a complete representation of something or a person.
let person = {
	name: "EJ",
	age: 25
}

// Changing the name for the above object:
person.name = "Erwyne"

// Output the log in the console
console.log(person.name);
/**********************************************************************************/

// Arrays
let selectedColors = ["red", "blue"];
selectedColors [2] = ["green"]; // adds a third array in position [2] called "green"
selectedColors [3] = [55]; // adds a fourth array in position [3] in a number type 55.
// Note: this is called dynamic arrays wherein you can keep adding data to an existing array,
// regardless of its datatype. Other languages only allow one type of data in the array.

console.log(selectedColors); // prints all the data in the array
console.log(selectedColors.length); // prints the total number of data in the array
console.log(selectedColors.[1]); // prints the data located in position [1] of the array
/**********************************************************************************/

// Functions
// Simple function to print "hello world" in the console
function greet(){
	console.log("hello world");
}

greet();

// Function with one parameter, therefore you have to input 1 argument
function greet (name){
	console.log("hello " + name);
}

greet("John");

// Function with two parameters, therefore you have to input 2 arguments
function greet (name, lastName){
	console.log("hello " + name + " " + lastName);
}

greet("John", "Doe");
/**********************************************************************************/

// Alerts and prompts
// Basic alert
alert("TEST MESSAGE")

// Alert with object
let person = {
	name: "EJ",
	age: 25
}
alert("Hello " + person.name + ". You are " + person.age + " years old.");

// Confirmation alerts
confirm("Are you sure?")

// Confirmation alerts for if else statements
let result = confirm("Are you sure?")
console.log(result); // prints the result either true or false. Helpful for if else statements.

// Prompts for user input
let result = prompt("Input username:")
console.log(result);