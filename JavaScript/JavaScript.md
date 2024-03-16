<div id="top-of-page"></div>

- [JAVASCRIPT](#javascript)
- [What is JavaScript?](#what-is-javascript)
  - [How to write JS in browser chrome?](#how-to-write-js-in-browser-chrome)
  - [VS Code Installation](#vs-code-installation)
- [Variable Data Types](#variable-data-types)
  - [Console.log](#consolelog)
  - [Variables in JS](#variables-in-js)
  - [Variable Rules in JS](#variable-rules-in-js)
  - [let, const \& var](#let-const--var)
    - [var](#var)
    - [let](#let)
    - [const](#const)


# JAVASCRIPT

# What is JavaScript?
- JS is programming language used to give instructions to the computer.
- Input(code) -> Computer -> Output

## How to write JS in browser chrome?
- Open Chrome > Right Click > Open Inspect > Console > Ctrl+K (To Clean the Console)
- eg. alert("Hello JS"); -> Press Enter

##  VS Code Installation
- Its free & Popular code editor by Microsoft
- Link to Download - https://code.visualstudio.com/download

<div align="right"><a href="#top-of-page">(^)</a></div>

# Variable Data Types

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
  
<img src="assets/images/VariableRules.jpg" width="500"/></br>

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