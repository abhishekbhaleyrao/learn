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
//Example 1
let age = 25;

if (age > 18) {
  console.log("You can Vote");
}
if (age < 18) {
  console.log("You CANNOT Vote!!!");
}

//Example 2
let color;
let mode = "dark";

if (mode === "dark") {
  color = black;
}
if (mode === "light") {
  color = white;
}
console.log(color);
