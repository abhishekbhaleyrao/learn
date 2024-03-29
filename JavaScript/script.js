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

//String Methods in JS

// str.slice()

let str = "0123456";
console.log(str.slice(1,3)); // (1,3) start and end index. It will not print last index eg it will print 12

//str1.concat(str2)
//Joins str2 with str1

let str1 = "Abhishek";
let str2 = "Bhalerao";

let res = str2.concat(Str1); //We can concate string with + eg "hello" + 123 it will print hello123

console.log(res);

//str.replace(searchVal, newVal)

let str = "hello";

console.log(str.replace("h","y")); // It will print yello

// str.charAt(idx)

let str = "ILoveJS";

console.log(str.charAt(0)); // I
console.log(str.charAt(2)); // o


//Practice Que
/* 
Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.
eg: user name = "shradhakhapra" , username should be "@shradhakhapra13"*/


let fullname = prompt("Enter your fullname without spaces");

let username = "@" + fullname + fullname.length;

console.log(username);

//Arrays

let marks = [97, 82, 66, 70, 99];

console.log(marks);

console.log(marks.length); //length is property in arrays. 


let heros = ["ironman","Thor", "Hulk"];

console.log(heros);

console.log(heros.indexOf("Thor",0)); //length is property in arrays.


// To print all array element using for loop


let heros = ["ironman","Thor", "Hulk"];

for(let i=0 ; i<heros.length ; i++){

  console.log(heros[i]);
}

//for of 

for(let hero of heros){
console.log(hero);

}

//for each
//for in


//Practice Que
/* Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] 
Find the average marks of the entire class.*/

let marks = [85, 97, 44,37, 76, 60];
let sum = 0;

for(let val of marks){

  sum += val;

}
console.log(sum);

let avg = sum/marks.length;

console.log(`avg marks of the class = ${avg}`);

/*
Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.
*/

/*Method 1
let items = [250, 645, 300, 900, 50];

let i=0;
for(let val of items){

  console.log(`value at index ${i} = ${val}`);
  let offer = val /10;
  items[i] = items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
  i++;
  
}
*/

//Method 2
for(let i = 0; i< items.length; i++){
let offer = items[i]/10;

items[i] -= offer;
}
console.log(itmes);
 