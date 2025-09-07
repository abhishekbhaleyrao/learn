<div id=top-of-page></div>

<div id=top-of-page></div>

# INTRODUCTION
- Object Oriented Programming Language
  - Supports classes, interfaces and inheritance
  - Uses Java like syntax 
- Strongly typed
  - Validates references to objects at compile time.
- Integrated with the database.
  - Provides direct access to records and their fields.
- Enable developers to add business logics to system events, including button clicks, related record updates, Visualforce pages and Lightning Components.
- One can call apex code through Web Service request and Triggers on Objects.

# Apex is:

### Integrated
- Provides built-in support for common Lightning Platform idioms
### Easy to Use
- Uses syntax and semantics which are easy teuse and understand.
- Apex is based on familiar Java Idioms.
### Data Focused
- Provides transactional access to the database, allows you to roll back operations.
### Rigorous
- Strongly typed language that uses direct references to schema objects such as Qbject and fields API.
### Hosted
- It is executed, and controlled entirely by Lightning Platform.
### Multi tenant Aware
- Apex runs in multi tenant environment like rest of Lightning Platform.
### Easy to Test
- Apex provides built-in support for unit test creation and execution. Test results indicate how much code is covered.
### Versioned
- One can save apex code against different versions of the API.

# Apex is included in:

- Performance Edition
- Unlimited Edition
- Developer Edition
- Enterprise Edition
- Database.com

# Use Apex when you want to:

- Create Web and Email Services.
- Perform Complex validation over more than one objects.
- Create complex business logics those cannot be implemented by FLOWS.
- Create custom logic that occurs over the entire transaction.
- Attach custom logic to another operation, such as Create/Update/Save a record, so that it occurs whenever the operation is executed, regardless it originates in Ul, VF or from API.
  
# Apex is A Case Insensitive Language
- Apex is case Insensitive but its best prcatice to use case sensitive because we use Javascript in LWC (JS is case sensitive)
# Apex Supports:

- Classes, Interfaces, Collections (List, Set, Map)
- Objects, Array notation, Expressions, Variables & Constants.
- Conditional Statements (if-else), Control Statement (for, while loop).
- Cloud Dev as it is stored, compiled and executed in cloud.
- Triggers to call methods.
- Database statements to query and search data.
- Transactions and rollbacks.
- The global access modifier which is more permissive than public, and allows access across namespaces and applications.
- Versioning of Custom Code.

# Development Tools
- Developer Console
- Salesforce Extension for Visual Studio Code

# Object Oriented Programming
- Apex is an Object Oriented Programming Language.
- An Object is a real world entity or problem.
- To represent object logically we implement a class.
- Class forms basis for Object Oriented Programming.
- A Class is a collection of variables and methods.
- Variables are attributes/properties of an Object whereas methods are behaviors of an Object.
- Once class is created then we can use it as a datatype to create an instance.

# Real World Example
## Rectangle
 ### Attributes/Properties
- length
- breadth
### Behaviors
- Area
- Perimeter

# Apex Class Name -> Rectangle
## Variables
- length
- breadth
## Methods
- area()
- perimeter( )


<img src="SFAssets/images/ApexClass.jpg" width="500"/></br>

# Class as Data Type to Create Instance
<img src="SFAssets/images/ClassasDataTypetoCreateInstance.jpg" width="500"/></br>

## Class & Method Example
<img src="SFAssets/images/ClassMethod.jpg" width="500"/></br>

### Calling Method using instance of an Class
<img src="SFAssets/images/CallClassMethodIntance.jpg" width="500"/></br>

# Constructor in Apex
<img src="SFAssets/images/Constructor.jpg" width="500"/></br>

## Rectangle Example With DefaultConstructor
<img src="SFAssets/images/RectangleWithConstructor.jpg" width="500"/></br>

### Calling Rectangle Methods With Constructor using Instance of an Class
<img src="SFAssets/images/CallingRectangleWithConstructor.jpg" width="500"/></br>

## Rectangle Example With Parameterizedonstructor
<img src="SFAssets/images/RectangleWithParameterizedConstructor.jpg" width="500"/></br>

### Calling Rectangle Methods With Constructor using Instance of an Class
<img src="SFAssets/images/CallingRectangleWithParameterizedConstructor.jpg" width="500"/></br>

# Static Vs Non-Static Methods

# Static Methods
<img src="SFAssets/images/RectangleStaticDemo.jpg" width="500"/></br>

### Calling Rectangle Static Method
<img src="SFAssets/images/CallingRecStaticMethod.jpg" width="500"/></br>

- Note  : If you want to call the method without creating the instance of an Class then we have to use "Static" keyword to a method. (Use Static Method)
- IMP   :  90% Code will be implemented using Static Method.

# Non Static Methods 

<img src="SFAssets/images/ClassMethod.jpg" width="500"/></br>

### Calling Non-Static Method using instance of an Class
<img src="SFAssets/images/CallClassMethodIntance.jpg" width="500"/></br>

- Note : In Non-Static Method we have to create Instance of an Class to call the method.