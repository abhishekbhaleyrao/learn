<div id="top-of-page"></div>

- [JAVASCRIPT](#javascript)
  - [What is JavaScript?](#what-is-javascript)
  - [How to write JS in browser chrome?](#how-to-write-js-in-browser-chrome)
  - [VS Code Installation](#vs-code-installation)
- [Chapter 1:  Variable Data Types](#chapter-1--variable-data-types)
  - [Console.log](#consolelog)
  - [Variables in JS](#variables-in-js)
  - [Variable Rules in JS](#variable-rules-in-js)
  - [let, const \& var](#let-const--var)
    - [var](#var)
    - [let](#let)
    - [const](#const)
- [Data Types in JS (Primitive \& NonPrimitive)](#data-types-in-js-primitive--nonprimitive)
  - [Primitive DataTypes (7)](#primitive-datatypes-7)
  - [NonPrimitive](#nonprimitive)
    - [Objects (Arrays, Functions)](#objects-arrays-functions)
- [Chapter 2: Operators and Conditional Statements](#chapter-2-operators-and-conditional-statements)
  - [Comments in JS](#comments-in-js)
  - [Operators in JS](#operators-in-js)
    - [Arithmetic Opeators](#arithmetic-opeators)
    - [Unary Operators **++** and **--**](#unary-operators--and---)
    - [](#)
    - [Assignment Operators](#assignment-operators)
    - [Comparison Operators](#comparison-operators)
    - [Logical Operators](#logical-operators)
  - [Conditional Statements in JS](#conditional-statements-in-js)
      - [if Statement](#if-statement)
      - [if-else Statement](#if-else-statement)
      - [else-if Statement](#else-if-statement)
      - [Ternary Operators in JS](#ternary-operators-in-js)
      - [Switch Statement](#switch-statement)
      - [Practice Que](#practice-que)
- [Chapter 3: Loops \& Strings](#chapter-3-loops--strings)
- [Loops](#loops)
  - [for Loop](#for-loop)
  - [for Loop](#for-loop-1)
  - [while Loop](#while-loop)
  - [do-while Loop](#do-while-loop)
  - [for-of Loop \& for-in Loop](#for-of-loop--for-in-loop)
  - [for-in Loop](#for-in-loop)
      - [Practice Que](#practice-que-1)
- [Strings](#strings)
  - [Template Literals in JS](#template-literals-in-js)
  - [String Methods in JS](#string-methods-in-js)
      - [Practice Que](#practice-que-2)
- [Arrays](#arrays)
  - [Array Indices](#array-indices)
    - [Looping over an Array](#looping-over-an-array)
      - [Practice Que](#practice-que-3)
  - [Array Methods](#array-methods)


**Project**
https://github.com/codewithsadee/grilli

**MDN**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

# JAVASCRIPT

## What is JavaScript?
- JS is programming language used to give instructions to the computer.
- Input(code) -> Computer -> Output

## How to write JS in browser chrome?
- Open Chrome > Right Click > Open Inspect > Console > Ctrl+K (To Clean the Console)
- eg. alert("Hello JS"); -> Press Enter

##  VS Code Installation
- Its free & Popular code editor by Microsoft
- Link to Download - https://code.visualstudio.com/download

<div align="right"><a href="#top-of-page">(^)</a></div>

# Chapter 1: <br> Variable Data Types

## Console.log 

- IT is used to print a message to the console.
- console.log("This is console example");
- console.log('This is console example');

- To Create JS file in VS we also need html file to display in browser.
- **Shift + !**  Used to generate bydefault html code structure.
  
## Variables in JS

- Variables are containers for data.
- Dynamically typed language.
  
    - Numbers
    - String
    - Boolean (true & false)


- To print Variable we do not require "" double quote.
- eg.
        radius = 14;
        console.log(radius);

<img src="assets/images/VariablesJS.jpg" width="500"/></br>

## Variable Rules in JS

- Variable names are case sensitive; "a" & "A" is different.
- Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
- Only a letter, underscore( _ ) and $ should be 1st character.
- Reserved words can't be Variable names.
- We use Camel Case for variable declaration.
- eg. 
    - fullName (Camel Case)
    - full_name (Snake Case)
    - fill-name (Kabab Case)
    - FullName (Pascal Case)
    - fullname (Dont use)
  
<img src="assets/images/VariableRules.jpg" width="400"/></br>

## let, const & var

### var 
- Variable can re-declared & updated. 
- A global scope variable.
- Now we don not use in JS because ECMAScript 6 (ES6) published in 2015.
  
### let 
- Variable cannot be re-declared but can be updated. 
- A block scope variable.
  
### const 
- Variable cannot be re-declared or updated. 
- A block scope variable.
- block scope means {} 

- eg.
    - let fullName = "tony stark";<br>
      let age = 24;<br>
      console.log(fullName);<br>



# Data Types in JS (Primitive & NonPrimitive)

<img src="assets/images/DataTypesJS.jpg" width="400"/></br>

## Primitive DataTypes (7)
- Number 
  - eg. <br>
        let age = 24;
- String
  - eg. <br>
        let fullName = "Tony Stark";
- Boolean
  - eg. <br>
        isFollow = true;
- Undefined<br>
  - eg.<br> 
        let x = x;
- Null<br>
  - eg.<br> 
        let x =  null;
- BigInt<br>
  - eg.<br> 
        let x = BigInt("123") ;
- Symbol<br>
  - eg.<br> 
        let y =  symnbol("Hello !");


## NonPrimitive 

###  Objects (Arrays, Functions)
- Its a collection of values
- Key value pair stored
  - eg.<br>
        age : 24 <br>
        name : "Rahul";
  - eg.<br>
        const student = {<br>
        fullName : "Rahul Kumar", <br>
        age : 20, <br>
        cgpa = 8.2, <br>
        isPass : True<br>
        };<br>

- How to access 
  - obj.key<br>
  - obj["key"]<br>
- How to update Object key value 
  - student["name"] = "Abhishek";

- **Note :** 
  1. We can Update **let** value <br>
  2. We cannot upate const value.<br>
  3. We can update const obj -> Key<br>
  
- eg.<br>
    const product = {<br>
title: "Ball Pen",<br>
offer: 5,<br>
price: 270,<br>
 };<br>

- eg.<br>
    const profile = {<br>
            userName: "Anjali",<br>
            isfollow: false,<br>
            followers: 123;<br>
            following: 112<br>
    };<br>


# Chapter 2: <br>Operators and Conditional Statements

## Comments in JS

- Part of Code which is not executed.

  
<img src="assets/images/CommentJS.jpg" width="400"/></br>

## Operators in JS

- Used to perform some operation on data.</br>

<img src="assets/images/OperatorsJS.jpg" width="300"/></br>

###  Arithmetic Opeators
- eg. <br>
    let a = 5;<br>
    let b = 6;<br>
    
    console.log("a + b =", a + b);<br>
    console.log("a - b =", a - b);<br>
    console.log("a * b =", a * b);<br>
    console.log("a / b =", a / b);<br> 
    console.log("a % b =", a % b);<br> Modulus
    console.log("a ** b =", a ** b);<br> Exponential //5^5 = 25

### Unary Operators **++** and **--**

- eg. <br>
    let a = 5;<br>
    let b = 2;<br>

    a = a + 1; // 6
    a++;
    
###
- 
    a++   and   a-- (Post)<br>
    ++a   and   --a (Pre)<br>

### Assignment Operators

- To assign value 
- left = right
  - Value goes right to left
- a += 1 means a = a+1
- 
<img src="assets/images/AssignmentOperatorsJS.jpg" width="300"/></br>


### Comparison Operators

- Used to compare two values.

<img src="assets/images/ComparisonOperatorsJS.jpg" width="300"/></br>

### Logical Operators

- Logical AND &&  :   (all values will be true then it will return true)
- Logical OR || : (all values will be False then it will return False)
- Logical NOT ! :

<img src="assets/images/LogicalOperatorsJS.jpg" width="200"/></br>

- eg.<br>
    // Logical Operators</br>
let a = 6;</br>
let b = 5;</br>

let cond1 = a > b; //true</br>
let cond2 = a === 6; //true</br>
console.log("cond1 && cond2", cond1 && cond2);</br>

- //if both cond are true then it will return true</br>
//if one cond is false then it will return false</br>
/*  cond1   cond2   Result(&&)  Result(||)</br>
    True    True    True        True</br>
    True    False   False       True</br>
    False   True    False       True</br>
    False   False   False       False </br>
*/</br>


## Conditional Statements in JS
- To implement some condition in the code.
  
#### if Statement

<img src="assets/images/ConditionalStatementsJS.jpg" width="300"/></br>

#### if-else Statement

<img src="assets/images/CondIfElseJS.jpg" width="300"/></br>

#### else-if Statement
- Used to check multiple conditions
  
<img src="assets/images/CondElseIfJS.jpg" width="300"/></br>

#### Ternary Operators in JS
- Used to check  with 3 Operands <br>
- eg.</br> a ? b : c <br>
<img src="assets/images/TernaryOperatorJS.jpg" width="300"/></br>

#### Switch Statement

<img src="assets/images/SwitchJS.jpg" width="250"/></br>

- Example
  
<img src="assets/images/SwitchExJS.jpg" width="450"/></br>

#### Practice Que 
1. 
<img src="assets/images/PracticeQueJS.jpg" width="550"/></br>

- Ans :<br>

<img src="assets/images/PracticeAnsJS.jpg" width="350"/></br>

2.  
<img src="assets/images/PracticeQue1JS.jpg" width="550"/></br>
- Ans :<br>

<img src="assets/images/PracticeAns1JS.jpg" width="550"/></br>


# Chapter 3: <br>Loops & Strings
# Loops
## for Loop

- Loops are used to execute a piece of code again & again.

<img src="assets/images/LoopsJS.jpg" width="550"/></br>

- Example

<img src="assets/images/forLoopExJS.jpg" width="550"/></br>

## for Loop
 - A loop that never ends.
 - Never do it in programe.
 - Stopping condition is always true.
 - It takes all memory in system.

## while Loop
- Condition will check in start ofthe loop.
  
<img src="assets/images/whileLoopJS.jpg" width="200"/></br>

- Example

<img src="assets/images/whileLoopExJS.jpg" width="250"/></br>

## do-while Loop
- Condition will check in last of the loop
- We have to add Semicolon in last
- minimum it will run for 1 time.

<img src="assets/images/dowhileLoopJS.jpg" width="200"/></br>

- Example - It will run for 1 time

<img src="assets/images/dowhileLoopExJS.jpg" width="250"/></br>

## for-of Loop & for-in Loop

- It help to iterate(loop) on special datatype

<img src="assets/images/forofLoopJS.jpg" width="200"/></br>

- Example - It will run for 1 time

<img src="assets/images/forofLoopExJS.jpg" width="250"/></br>

- Output 

<img src="assets/images/forofLoopExAnsJS.jpg" width="80"/></br>

- Example - 

<img src="assets/images/forofLoopEx1JS.jpg" width="250"/></br>

- Output 

<img src="assets/images/forofLoopExAns1JS.jpg" width="200"/></br>

## for-in Loop
- It returns Key of an Object and array.
- Iterator used with Object and arrays.
  
<img src="assets/images/forinLoopJS.jpg" width="200"/></br>

- Example - 

<img src="assets/images/forinLoopExJS.jpg" width="400"/></br>

#### Practice Que 
1. To Print Even number from 0 to 100.
<img src="assets/images/PracticeQue2JS.jpg" width="300"/></br>

- Ans :<br>

<img src="assets/images/PracticeAns2JS.jpg" width="400"/></br>

2. Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.<br>

<img src="assets/images/PracticeQue3JS.jpg" width="500"/></br>

- Ans :<br>

<img src="assets/images/PracticeAns3JS.jpg" height="250 " width="800"/></br>

# Strings
- inbuilt Properties: length

<img src="assets/images/StringsJS.jpg" width="350"/></br>

## Template Literals in JS
- A way to have embeded expressions in strings.
- backticks `` used to denote template literals

**String Interpolation** 
- To create string by doing substitution of placeholders

<img src="assets/images/TemplateLiteralsJS.jpg" width="350"/></br>

- Example

<img src="assets/images/TemplateLiteralsExJS.jpg" width="400"/></br>

**Escape Characters** 
- \n used to move line to the **next line**
- \t used to give **tab** space 
  
## String Methods in JS

- It will not change original string. 
- It will store in variable with new string.
- Stings are **Immutable** in JS.
- str.trim is used to remove tart and end space whitespaces from string.


<img src="assets/images/StringMethodsJS.jpg" width="350"/></br>


<img src="assets/images/Strings1JS.jpg" width="350"/></br>


#### Practice Que 

1. Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.
eg: user name = "shradhakhapra" , username should be "@shradhakhapra13"

<img src="assets/images/PracticeQue4JS.jpg" width="500"/></br>

- Ans :<br>

<img src="assets/images/PracticeAns4JS.jpg" width="400"/></br>

# Arrays

- Its a collection of items.
- Its linear
- Arrays are **Mutable**. Arrays we can change with index
- index/position start with 0 zero.
- Array prints undefined when there is no value present in the array.

<img src="assets/images/ArraysJS.jpg" width="400"/></br>

## Array Indices

<img src="assets/images/ArrayIndicesJS.jpg" width="400"/></br>

### Looping over an Array

To print all the elements in an Array.
<br>
Loops -> Iterable (Strings, Objects, Array)<br>
<br>
for Loop : length<br>
<br>
for(let idx=0 ; idx < arr.length ; idx++ ){<br>
<br>
}<br>

1. **for Loop & for Of Loop :**

<img src="assets/images/ArrayLoopsJS.jpg" width="400"/></br>


.jpg

#### Practice Que 

1. Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.

<img src="assets/images/PracticeQue5JS.jpg" width="500"/></br>

- Ans :<br>

<img src="assets/images/PracticeAns5JS.jpg" width="600"/></br>

2. Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.

<img src="assets/images/PracticeQue6JS.jpg" width="500"/></br>

- Ans :<br>

<img src="assets/images/PracticeAns6JS.jpg" width="700"/></br>



## Array Methods

<img src="assets/images/ArrayMethodsJS.jpg" width="500"/></br>
