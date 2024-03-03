<div id="top-of-page"></div>


- [Java Introduction](#java-introduction)
  - [**System.out.println();**](#systemoutprintln)
    - [Printing Number \& Text](#printing-number--text)
    - [Arithmetic Operations](#arithmetic-operations)
    - [Understanding the print command](#understanding-the-print-command)

<br />

# Java Introduction

## **System.out.println();**

### Printing Number & Text 

- Used to print output to Screen.
- Semicolon ; is mandatory at the end of statements in Java.
  - To print text in Java we use double quote " "
  - Eg. 
  
        System.out.println(12);

        System.out.println("Project"); 
        //It will print text "Project"
        

### Arithmetic Operations

- We can also perform mathematical operations (like addition, subtraction etc) with the System.out.println statement.

- To add two numbers, we can do this

        System.out.println(21 + 40);

        The above code will output: 61

### Understanding the print command

- To a print a number we use:
- Eg.

        System.out.println(4);

        // Output:
        // 4
   
Breaking it down:
1. **System**: System is built-in class that provides access to the system.
2. **out**: out is member of system class which represents standard output.
3. **println**: println is method of out that prints what we give to it.

Eg. Area & Perimeter of Rectangle

    - For any rectangle, the formula for area is length * breadth.

    - The formula for perimeter is 2 * (length + breadth)

        class CodeChef
        {
            public static void main (String[] args)
            {
                System.out.println(11*13);
                
                System.out.println(2 * (11+13));
            }
        }



