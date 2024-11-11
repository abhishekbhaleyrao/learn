<div id="top"></div><br />

- [What is LESS?](#what-is-less)
- [How do you represent a variable in Less?](#how-do-you-represent-a-variable-in-less)
- [What is the use of Mixins in Less?](#what-is-the-use-of-mixins-in-less)
- [What is the role of nesting in Less programming?](#what-is-the-role-of-nesting-in-less-programming)
- [What is the difference between Less and SASS?](#what-is-the-difference-between-less-and-sass)
- [How is Less is similar to Sass?](#how-is-less-is-similar-to-sass)
- [What is \&combinator in Less?](#what-is-combinator-in-less)
- [Does Less support operations?](#does-less-support-operations)
- [What is the use of Escaping in Less?](#what-is-the-use-of-escaping-in-less)
- [How can you invoke the compiler via command line in Less?](#how-can-you-invoke-the-compiler-via-command-line-in-less)
- [What is the purpose of e() function in Less?](#what-is-the-purpose-of-e-function-in-less)
- [How can you create a loop structure in Less?](#how-can-you-create-a-loop-structure-in-less)
- [What is the best way to pre-compile a Less into CSS?](#what-is-the-best-way-to-pre-compile-a-less-into-css)
- [What is the use of Namespaces and Accessors in Less?](#what-is-the-use-of-namespaces-and-accessors-in-less)
- [Define scope in the context of variables in LESS programming language.](#define-scope-in-the-context-of-variables-in-less-programming-language)
- [What is the use of extend in Less?](#what-is-the-use-of-extend-in-less)
- [What are different types of functions available in Less?](#what-are-different-types-of-functions-available-in-less)
- [How Can You Create A Loop Structures In Less?](#how-can-you-create-a-loop-structures-in-less)
- [](#)
- [](#-1)
- [](#-2)
- [](#-3)
- [](#-4)
- [](#-5)
- [](#-6)
- [](#-7)
- [](#-8)
- [](#-9)
- [](#-10)
- [](#-11)
- [](#-12)
- [](#-13)
- [](#-14)
- [](#-15)
- [](#-16)
- [](#-17)
- [](#-18)
- [](#-19)
- [](#-20)
- [](#-21)
- [](#-22)
- [](#-23)
- [](#-24)
- [](#-25)
- [](#-26)
- [](#-27)
- [](#-28)
- [](#-29)
- [](#-30)
- [](#-31)
- [](#-32)
- [](#-33)
- [](#-34)
- [](#-35)
- [](#-36)
- [](#-37)
- [](#-38)
- [](#-39)
- [](#-40)
- [](#-41)
- [](#-42)
- [](#-43)
- [](#-44)
- [](#-45)
- [](#-46)
- [](#-47)
- [](#-48)
- [](#-49)
- [](#-50)
- [](#-51)
- [](#-52)


<br />

## What is LESS?

- The Learner Style Sheet (Less) is a backward-compatible language that can be compiled into the Cascading Style Sheet (CSS) and runs on both the client side and server side.
- It is an open source language and cross-browser compatible.

<br />
<br />

## How do you represent a variable in Less?

- It is required to declare a variable with @ symbol and uses a colon (:) to assigned the particular value in the variable. It is also necessary to add a semi-colon (;) after the value of the variable.
- Example:

```css
@primarycolor: #FF7F50;
h1 {
  color: @primarycolor;
}
```

<br />
<br />

## What is the use of Mixins in Less?

- Mixins facilitates you to add the set of properties from one rule-set into another rule-set.
- It includes class names as its properties.
- Mixins can be declared as the same way as CSS style using a class or id selector.
- It can store multiple values and can be reused in the code whenever necessary.
- Example:

```css
.round-borders {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
#menu {
  color: gray;
  .round-borders;
}
```

<br />
<br />

## What is the role of nesting in Less programming?

- The nesting is used to make the code simple, clean and Less complicated by allowing it to follow some visual hierarchy.
- For example nesting of classes can be done in Less programming.

```css
.container {
  h1 {
    font-size: 25px;
    color: #e45456;
  }
  p {
    font-size: 25px;
    color: #3c7949;
  }
  .myclass {
    h1 {
      font-size: 25px;
      color: #e45456;
    }
    p {
      font-size: 25px;
      color: #3c7949;
    }
  }
}
```

- In the above Less document example of nesting myclass is the subclass of container class.

<br />
<br />

## What is the difference between Less and SASS?

<table>
    <tr>
        <th>Less</th>
        <th>Sass</th>
    </tr>
    <tr>
        <td>Less is coded in JavaScript.</td>
        <td>SASS is coded in ruby.</td>
    </tr>
    <tr>
        <td>It is processed on the client side</td>
        <td>It is processed at the client side.</td>
    </tr>
    <tr>
        <td>For mixing, it uses Less Mixins.</td>
        <td>For mixing, it uses Compass.</td>
    </tr>
    <tr>
        <td>To assign a variable LESS uses &#39;@&#39;symbol.</td>
        <td>To assign a variable SASS uses &#39;$&#39;symbol.</td>
    </tr>
    <tr>
<td>Example:<br />

```css
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;

#header {
  color: @light-blue;
}
```

</td>
<td>Example:<br />

```css
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

</td>
    </tr>
</table>

<br />
<br />

## How is Less is similar to Sass?

- Namespaces are similar in both.
- Color functions are identical in both.
- Nesting capabilities are identical in both.
- JavaScript evaluations are identical in both.

<br />
<br />

## What is &combinator in Less?

- &combinator is used to combine the nested selector with the parent selector.

<br />
<br />

## Does Less support operations?

- Less supports various arithmetic operations such +,? , \*, / that can be operated on any color or variable.

<br />
<br />

## What is the use of Escaping in Less?

- The escaping is used when there is a requirement to execute CSS file with invalid syntax.

<br />
<br />

## How can you invoke the compiler via command line in Less?

- $ Lessc styles.Less

<br />
<br />

## What is the purpose of e() function in Less?

- The role of e() function is to escape a value from the Less compiler.

<br />
<br />

## How can you create a loop structure in Less?

- When recursive mixins are combined with Pattern matching and guard expressions, it can create various iterative/loop structures.

<br />
<br />

## What is the best way to pre-compile a Less into CSS?

- The easiest way to pre-compile a Less into CSS is to use Less.js with Node.js where Less.js run outside the browser.

<br />
<br />

## What is the use of Namespaces and Accessors in Less?

- The namespaces were used to group the Mixins under a common name. You can perform Encapsulation with the help of Namespaces and Accessors in the Less file.
- Example:

```css
.class1 {
  .class2 {
    .val(@param) {
      font-size: @param;
      color: green;
    }
  }
}
.myclass {
  .class1 > .class2 > .val(20px);
}
```

<br />
<br />

## Define scope in the context of variables in LESS programming language.

- The scope of variables refers to the place where the variables exist. The variables were searched in the local scope first. If it is not in the local scope, then the compiler search in the parent scope.
- Example:

```css
@a: 15px;
.myclass {
  font-size: @a;
  @a: 20px;
  color: green;
}
```

- In the above Less document variable a is defined inside the class with value 20 and variable with the same name is also defined outside the class with value 15. When the compiler executes this Less document, it searches for the local scope first. Hence the local scope of the variable is used. After the compilation process, CSS file is created having font-size value 20px.

<br />
<br />

## What is the use of extend in Less?

- The extend is a Less pseudo class which is used to select another selector style in one selector.
- Example:

```css
h2 {
  &:extend(.style);
  font-style: italic;
}
.style {
  background: green;
}
```

- In the above example of extending style class properties have been imported into the properties of h2.

<br />
<br />

## What are different types of functions available in Less?

- Misc function
- String functions
- List function
- Math function
- Type function
- Color definition function
- Color channel function
- Color operation
- Color blending functions

<br />
<br />

## How Can You Create A Loop Structures In Less?

- A mixin can call itself in LESS. Such recursive mixins, when combined with Pattern matching and Guard Expressions, can be used to create various iterative/loop structures.
- Example:

  ```css
  .loop(@counter) when (@counter > 0) {
    .loop((@counter - 1)); /* next iteration */
    width: (10px * @counter); /* code for each iteration */
  }
  div {
    .loop(5); /* launch the loop */
  }
  ```

  Output:

  ```css
  div {
    width: 10px;
    width: 20px;
    width: 30px;
    width: 40px;
    width: 50px;
  }
  ```

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />

##

<br />
<br />
```
