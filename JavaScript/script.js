// Comparison Operators

let a = 5;
let b = 2;

console.log("5 == 2", a == b); // false
console.log("5 == 5", a == b); //true

// Logical Operators
let a = 6;
let b = 5;

let cond1 = a > b; //true
let cond2 = a === 6; //true
console.log("cond1 && cond2", cond1 && cond2);

//if both cond are true then it will return true
//if one cond is false then it will return false
/*  cond1   cond2   Result(&&)  Result(||)
    True    True    True        True
    True    False   False       True
    False   True    False       True
    False   False   False       False 
*/

//Conditional Statements
//Example if Statement
let age = 25;

if (age > 18) {
  console.log("You can Vote");
}
if (age < 18) {
  console.log("You CANNOT Vote!!!");
}

//Example if Statement
let color;
let mode = "dark";

if (mode === "dark") {
  color = black;
}
if (mode === "light") {
  color = white;
}
console.log(color);

//Example if-else Statement
let color;
let mode = "dark";

if (mode === "dark") {
  color = black;
} else {
  color = white;
}
console.log(color);

//Example if-else Statement
let age = 25;

if (age >= 18) {
  console.log("You can Vote");
} else {
  console.log("You CANNOT Vote!!!");
}

//Example if-else Statement
//Odd Even X % 2===0

let num = 10;

if (num % 2 === 0) {
  console.log(num, "is Even");
} else {
  console.log(num, "is Odd");
}

//Example Else-if Statement
let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "blue") {
  color = "blue";
} else if (mode === "pink") {
  color = "pink";
} else {
  color = "white";
}
console.log(color);

//Ternary Operators
//Example
let age = 25;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);

//Practice Que
/* 
Qsl. Get user to input a number using prompt("Enter a number:"). Check if the number is
a multiple of 5 or not.*/

let num = prompt("Enter a Number:");

if (num % 5 === 0) {
  console.log(num, " is a multiple of 5");
} else {
  console.log(num, " is NOT multiple of 5");
}

/* 
Qs2. Write a code which can give grades to students according to their scores:

90-100, A
70-89, B
60-69, c
50-59, D
0-49, F
*/

let score = 75;
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}

console.log("According to your score, your grade is ", grade);

//Loops & Strings

// for Loop
// Example To Print sentense to 5 times

for (let count = 1; count <= 5; count++) {
  console.log("Apna College");
}

//Example To Calculate sum of 1 to n.
let sum = 0;
let n = 5;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("Sum =", sum);

//Example
//To Print i
for (let count = 1; count <= 5; count++) {
  console.log("i =", i);
}

//Example While Loop
let i = 1;
while (i <= 10) {
  console.log("Sai");
  i++;
}

//Example d0-while Loop
let i = 20;
do {
  console.log("Sairam");
  i++;
} while (i <= 10);

//Example for-of Loop

let str = "JavaScript";

for (let i of str) {
  //iterator -> character
  console.log("i =", i);
}

//Example for-of Loop
//To check lenght of string

let str = "JavaScript";
let size = 0;

for (let i of str) {
  //iterator -> character
  console.log("i =", i);
  size++;
}
console.log("String size", size);

//Example for-in Loop
let student = {
  name: "Rahul Kumar",
  age: 20,
  cgpa: 7.5,
  isPss: true,
};

for (let key in student) {
  console.log("Key =", key, "Value =", student[key]);
}

//Practice Que
/* 
Qs1. Print all even numbers from 0 to 100.*/

for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0)
    //even number
    console.log("Even num =", num);
}

/* Qs2. Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value. */

let gameNum = 25;
let userNum = prompt("Guess the game Number : ");

while (userNum != gameNum) {
  userNum = prompt("You entered Wrong number, Guess again : ");
}
console.log("Congratulations!!!, you have entered right number");

//Example String
let str = "I love JavaScript";
let str2 = "Programming";
//String length
str.length;
str2.length;
//String indices
console.log(str[0]); //I

//Template Literals

let specialString = `This is a template literal`;
console.log(typeof specialString);

//Example Template Literal

let obj = {
item ="pen",
price: 10,
};

console.log("The cost of", obj.item, "is", obj.price, "rupees");

//Template Literal
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);