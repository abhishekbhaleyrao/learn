<div id="top"></div><br />

- [Basics](#basics)
  - [NodeJS](#nodejs)
  - [Javascript Engine](#javascript-engine)
  - [JavaScript-runtime on browser](#javascript-runtime-on-browser)
  - [How node js works](#how-node-js-works)
  - [V8 engine](#v8-engine)
  - [ECMAScript](#ecmascript)
  - [NPM](#npm)
  - [Modules](#modules)
  - [require()](#require)
  - [module.exports](#moduleexports)
  - [Events](#events)
  - [Stack \& Heap](#stack--heap)
  - [Event loop in NodeJS](#event-loop-in-nodejs)
  - [How to create a simple server?](#how-to-create-a-simple-server)
  - [package.json](#packagejson)
  - [REPL or Node-shell?](#repl-or-node-shell)
  - [Control Flow](#control-flow)
  - [Test Pyramid](#test-pyramid)
  - [Error first callback](#error-first-callback)
  - [Reactor pattern](#reactor-pattern)
  - [LTS](#lts)
  - [Callback-hell](#callback-hell)
  - [Middleware](#middleware)
  - [URL module](#url-module)
  - [Spawn() vs fork()](#spawn-vs-fork)
  - [Stub](#stub)
  - [Assert](#assert)
  - [ExpressJS](#expressjs)
  - [process.nextTick() vs setImmediate()](#processnexttick-vs-setimmediate)
  - [Buffer class](#buffer-class)
  - [How does Node.js handle child threads?](#how-does-nodejs-handle-child-threads)
  - [Streams](#streams)
  - [Node\_ENV](#node_env)
  - [Punycode](#punycode)
  - [Exit codes](#exit-codes)
  - [Event emitter](#event-emitter)
  - [Crypto](#crypto)
  - [Why express app and server must be kept separate?](#why-express-app-and-server-must-be-kept-separate)
  - [Advantages \& Disadvantage of Node](#advantages--disadvantage-of-node)
  - [libuv](#libuv)
  - [What is a thread pool?](#what-is-a-thread-pool)
  - [Global objects](#global-objects)
  - [Connect module](#connect-module)
  - [passport](#passport)
  - [put and patch in context of rest api](#put-and-patch-in-context-of-rest-api)
  - [Options method in context of rest api](#options-method-in-context-of-rest-api)
  - [How to connect mysql or postgress](#how-to-connect-mysql-or-postgress)
  - [Security implementation](#security-implementation)
  - [Javascript vs Node](#javascript-vs-node)
  - [Angular vs Node](#angular-vs-node)
  - [How to validate api parameters](#how-to-validate-api-parameters)
  - [Node db caching](#node-db-caching)


# Basics

## NodeJS
- Node.js is a runtime environment that allows you to run JavaScript on the backend.
- Node came on the scene because JavaScript used to only work in the web browser.
- Server technology
- Free and open-source server technology.
- Used for creating server-side web applications.
- It is written in C,C++, Javascript
- It uses Google's open source V8 Javascript Engine to convert Javascript code to C++
- Written by Ryan Dahl

<br />

- **Features**
	- Asynchronous in Nature and Event driven
	- Single Threaded Architecture
	- Scalable
	- Quick Execution time for code
	- Compatibility on the cross platforms
	- Uses JavaScript
	- Fast Data Streaming
	- No Buffering
  
<br />

## Javascript Engine
- Browsers have inbuilt JavaScript engine which help them to understand and interpret JavaScript codes.
- Help to convert our JavaScript program into computer-understandable language.<br /><br />
    <img src="assets/javascript-engine.png" width="500" /><br />

<br />

## JavaScript-runtime on browser
  - The callback queue includes callback functions that are ready to be executed.
  - The callback queue ensures that callbacks are executed in the First-In-First-Out (FIFO) method and they get passed into the stack when it’s empty.<br /><br />
    <img src="assets/javascipt-runtime.jpeg" width="500" /><br />

<br />

## How node js works
- NodeJS is virtual machine that uses Javascript as its scripting language and runs on V8 environment.
- It works on a single-threaded event loop and a non blocking I/O which provides high rate as it can handle a higher number of concurrent requests.
- By making use of HTTP module, NodeJS can run on any stand-alone web server.

<br />

## V8 engine
- Google's open source high-performance Javascript engine.
- Written in C++ and used in Google Chrome.
- It implements ECMAScript as specified in ECMA-262 and runs on many processors.
- V8 can run standalone or can be embedded into any C++ application.

<br />

## ECMAScript
- Standard on which Javascript is based on.
- It was created to standardize Javascript.
- It is commonly used for client-side scripting on the World Wide Web(WWW) and used by NodeJs for written server applications and services.

<br />

## NPM
- Node Package Manager
- It’s a library and registry for JavaScript software packages.
- It is default package manager for Javascript programming language.
- NPM has command-line tools to help you install the different packages and manage their dependencies.

<br />


## Modules
- Module is a piece of reusable JavaScript code.
- Introduced by ES6
- Modules help developers adhere to the DRY (Don't Repeat Yourself) principle in programming.

<br />

- **Types**:
  1. Built-in modules (http, url, path, fs, os)
  2. Local modules 
  3. Third-party modules

<br />

1. **Built-in modules**
    - ex: http, url, path, fs, os
    - ex:
        ```js
        const http = require('http') 

        server = http.createServer((req, res) => { 
            res.writeHead(200, {'Content-Type': 'text/plain'}) 
            res.end('Hello World!')
        })

        server.listen(3000)
        ```
        <br />

2. **Local modules**
    - User defied modules
    - ex:
        - Creating module<br />
            ```js
            function sayHello(userName) {
                console.log(`Hello ${userName}!`)
            }
            module.exports = sayHello;
            ```
            <br />
        - Using modules in another file<br />
            ```js
            const sayHello = require('./sayHello')
            sayHello("Maria") // Hello Maria!
            ```
            <br />

3. **Third-party modules**
    - With NPM, you can share your modules as packages via the NPM registry. And you can also use packages others have shared.
    - ex:
        - Install module<br />
            ```js
            npm install capitalize // capitalize is name-of-package
            ```
            <br />
        - Use installed package
            ```js
            const capitalize = require('capitalize')
            console.log(capitalize("hello")) // Hello
            ```
            <br />

<br />

## require()
- used to include modules from external files.
- function which takes string parameter which contains the location of the file that you want to include.
- ex: 
    ```js
    require('path');
    ```

<br />

## module.exports
- To access module member outside, we need to export the functions or variables of modules using module.exports method.
- ex:
  - `greet.js`
    ```js
    var greet = function() {
        console.log('hello');
    }
    module.exports=greet;
    ```
  - `app.js`
    ```js
    var greet=require('./greet.js');
    greet();	// Output: hello
    ```
<br />

## Events
- Events in javascript are the way we have to control actions triggered by some entity.
- Mouse move, click, file copied or deleted are some examples.

<br />

- **Event emitter**
  - It is class of events module, by which we can create. manage, emit events.
  - ex:
      ```js
      const event = require('events');
      var eventEmitter=new EventEmitter();
      ```

<br />

- **Event handling method**
  - The Event emitter class works through callback mechanisms and contains two main methods.
    - Event Subscription: On.
    - Event Publishing: Emit.
  - ex:
      ```js
        // Importing events
        const EventEmitter = require('events');
        
        // Initializing event emitter instances 
        var eventEmitter = new EventEmitter();
        
        // Registering to myEvent 
        eventEmitter.on('myEvent', (msg) => {
          console.log(msg);
        });
        
        // Triggering myEvent
        eventEmitter.emit('myEvent', "First event"); // After emit Output: First event
      ```
      <br />
  - **Remove Listener**
    - It is class of events module, by which we can create. manage, emit events.
    - ex:
        ```js
        eventEmitter.removeListener(event, listener) // remove one instance at a time
        eventEmitter.removeAllListeners([event])
        ```
    - ex: 
        ```js
        // Importing events
        const EventEmitter = require('events');
        
        // Initializing event emitter instances 
        var eventEmitter = new EventEmitter();

        var fun1 = (msg) => {
            console.log("Message from fun1: " + msg);
        };

        var fun2 = (msg) => {
            console.log("Message from fun2: " + msg);
        };
        
        // Registering fun1 2-times and fun2
        eventEmitter.on('myEvent', fun1);
        eventEmitter.on('myEvent', fun1);
        eventEmitter.on('myEvent', fun2);
        
        // Removing listener fun1 only one instance will be removed
        eventEmitter.removeListener('myEvent', fun1);
        
        // Triggering myEvent
        eventEmitter.emit('myEvent', "Event occurred");
        
        // Removing all the listeners to myEvent
        eventEmitter.removeAllListeners('myEvent');
        
        // Triggering myEvent
        eventEmitter.emit('myEvent', "Event occurred");

        // Output: 
        // Message from fun1: Event occurred
        // Message from fun2: Event occurred
        ```
        <br />

  - **Listener**
    - By default, a maximum of 10 listeners can be registered for any single event.
    - ex:
        ```js
        eventEmitter.setMaxListeners(15)
        eventEmitter.getMaxListeners()
        // Listing listeners array
        eventEmitter.listeners(event_name)
        // Listing listeners count
        eventEmitter.listenerCount(event_name)
        // listener_func will be add the one-time listener to the beginning of the array. 
        eventEmitter.prependOnceListener(event_name, listener_func) 
        // listener_func will be inserted in front of listeners array
        eventEmitter.prependListener(event_name, listener_func)
        ```
<br />

## Stack & Heap
- Stack & Heap are memory management units, where value types are stored on the stack and reference types are stored on the heap.
- Stack has less memory than heap.
- `Stack` contains struct, int, double, float, char
- `Heap` contains class instance, object, array

<br />

- **Stack**
  - Every function has its own stack.
  - It contains variables, parameters, and return address.
  - After execution of function stack will automatically removed.<br /><br />
    <img src="assets/stack.png" width="500" /><br />

<br />

- **Heap**
  - Related to the process and not to a specific function.
  - Heap can have many stacks<br /><br />
    <img src="assets/heap.png" width="800" /><br />
  - 

<br  />

## Event loop in NodeJS

- Handles all the asynchronous code.
- Allows JavaScript to execute multiple tasks concurrently without blocking the main thread.
- EventEmitters -> Events List -> Event Loop -> Event Handlers
- Operations can be done asynchronously using event loop.
	- I/O operations
	- Heavy Computations
	- Blocking Operations

<br />

- **Features**
  - Is an endless loop, which waits for tasks, executes them, and then sleeps until it receives more tasks.
  - Executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
  - Allows us to use callbacks and promises.
  - Executes the tasks starting from the oldest first.<br /><br />

<br />

- **How event loop works?**
  - Checks if tasks are available in task queue. If tasks are waiting and call stack is empty, it adds first task from task queue in call stack.
  - This process continues until task queue is empty.<br /><br />
    - **Event loop component**
      - **Task Queue**: Tasks waiting to execute.
      - **Call Stack**: Execute function and then removes it from call stacks.
      - **Web APIs**: Handles asynchronous tasks<br /><br />
        <img src="assets/event-loop.gif" width="500" /><br />
    - **Event loop Phases**
      - **Timers**: Execute callbacks scheduled by `setTimeout` and `setInterval`.
      - **Pending Callbacks**: Callbacks of system operations are executed.
      - **Idle, Prepare**: Internal phrases uses by event loop.
      - **Poll**: Retrieves new I/O events and executes their callbacks.
      - **Check**: `setImmediate` callbacks are executed
      - **Close Callbacks**: Handles `close` event callbacks.

<br />

## How to create a simple server?
- ex:
  ```js
  var http = require('http');
  http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hello\n');
  }).listen(1320,'127.0.0.3');
  ```
<br />

## package.json
- Heart of the entire application.
- Manifest file that contains the metadata of the project where we define the properties of a package.
- Create a package.json file
    ```ts
    npm init
    ```
- Installing modules
    ```ts
    npm install
    ```

<br />

## REPL or Node-shell?
- Read-Eval-Print-Loop (REPL) or Node Shell
- Node comes with virtual environment that is REPL.
- Easy way to test Javascript code.
- run node command in command-line.
- Interactive shell that processes Node.js expressions. The shell `reads` JavaScript code the user enters, `evaluates` the result of interpreting the line of code, `prints` the result to the user, and `loops` until the user signals to quit.(press ctrl+c twice to quit)
- Starting REPL 
    ```js
    $ node
    ```
- Ex:
    ```js
    $ node
    > x = 10
    10
    > var y = 10
    undefined
    > x + y
    20
    > console.log("Hello World")
    Hello World
    undefined
    ```
<br />


## Control Flow 
- Control Order of execution
- Collect data
- Limit concurrency
- Invoke next step
- A way of managing the flow of function calls.
- Managed using: `callbacks`, `promises`, and `async/await`.

<br />

## Test Pyramid

  <img src="assets/test_pyramid.png" width="300" /><br />
  
1. End to end
2. Integration tests
3. Unit test

<br />

## Error first callback
- Error-First Callback in Node.js is a function which either returns an error object or any successful data returned by the function.
- The first argument in the function is reserved for the error object. If any error has occurred during the execution of the function, it will be returned by the first argument.
- The second argument of the callback function is reserved for any successful data returned by the function. If no error occurred then the error object will be set to null.
- ex:
  ```js
  var myPost = new Post({title: 'Hello'0});
	
  myPost.save(function(err, myInstance) { // first argument is error to check error first and handle it.
	if (err) { /*handle error and return*/ }
  });
  ```

<br />

## Reactor pattern
- Used to avoid the blocking of the I/O operations.
- provides handler that is associated with each I/O operation.
- After generating I/O request, it is then submitted to a de-multiplexer.
- de-multiplexer is a notification interface which is capable of handling concurrency in non-blocking I/O mode.
- Helps in collecting each and every request in the form of an event and then place each event in queue.
- Resulting in generation of event queue.

<br />

## LTS
- Long time support (LTS) version of node receives all the critical bug fixes along with security updates and performance improvements.
- LTS version of node.js is an `even-numbered` node.js version like `14. x.x LTS`, `16.x.x LTS`.
- It is supported for at least 18 months.

<br />

## Callback-hell
- Also known as pyramid-of-doom
- It is pattern caused by intensively nested callbacks which are unreadable and unwieldy.
- It typically contains multiple nested callback functions which in turn make the code hard to read and debug.
- ex:
  ```js
  async_A(function(){
    async_B(function(){
      async_C(function(){
        async_D(function(){
          ...
        });
      });
    });
  });
  ```
<br />

## Middleware
- Function receives the request and response objects.
- **Task**:
	- Execute any type of code
	- Update or modify the request and the response objects.
	- Finish the request-response cycle
	- Invoke the next middleware in the stack.

<br />

## URL module
- Provides various utilities for URL resolution and passing.
- built-in module that helps in spitting up the web address into a readable format.
- ex:
  ```js
  var url = require('url');
  var adr = 'http://localhost:4203/default.htm?year=2019'
  var q = url.parse(adr,true);
  console.log(q.host);  // localhost:4203
  console.log(q.pathname);  // default.htm
  console.log(q.query);  // year=2019
  console.log(q.query.year);  // 2019
  ```
<br />

## Spawn() vs fork()

| Spawn                                                                      | Fork                                                             |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Spawn child process starts sending data back to parent process immediately | Fork does not send data automatically                            |
| Creates a new process to run.                                              | Creates multiple child processes but run on same parent process. |
| New V8 instance will not created                                           | New V8 instance wil be created                                   |
| Used to return large amount data.                                          | Used to separate tasks from main loop.                           |

<br />

## Stub
- A small program routine that substitutes for a longer program
- **Features of stub**:
  - Stubs are dummy objects for testing.
  - Stubs implement a pre-programmed response.
- **When to use stubs?**
  - Prevent a specific method from being called directly.
  - Replacing the problematic pieces of code.
  - Testing asynchronous code easy.
- **Few Methods**:
  - stub.withArgs(arg1[, arg2, ...]);
  - stub.onCall(n);
  - stub.onFirstCall();
  - stub.returns(n);
  - stub.reset();
  - stub.resetBehavior();
- Function Example: <br/>
    ```js
    var stub = sinon.stub(); // Creates an anonymous stub function

    // If you want to create a stub object of MyConstructor, but don’t want the constructor to be invoked, use this utility function.
    var stub = sinon.createStubInstance(MyConstructor, overrides);
    // overrides is an optional map overriding created stubs, for example:
    var stub = sinon.createStubInstance(MyConstructor, {
      foo: sinon.stub().returnsThis(),
    });
    // is the same as:
    var stub = sinon.createStubInstance(MyConstructor);
    stub.foo.returnsThis();

    // If provided value is not a stub, it will be used as the returned value:
    var stub = sinon.createStubInstance(MyConstructor, {
      foo: 3,
    });
    // is the same as:
    var stub = sinon.createStubInstance(MyConstructor);
    stub.foo.returns(3);

    // reset
    stub.resetBehavior();
    ```
- Ex: <br/>
  ```js
  var fs = require('fs') 
  var writeFileStub = sinon.stub(fs,  
      'writeFile', function (path, data, cb) {   
          return cb(null) 
  }) 
    
  expect(writeFileStub).to.be.called
  writeFileStub.restore()
  ```
- Can  `require`  be stubbed in  node js  with the help of  `sinon.js`  ?
  - Problem: <br />
    ```js
    // I have some file like 'awesomeModule'
    const myModule = require('awesomeModule');

    // I desire to include this stub in my tests.
    myRequireStub.withArgs('awesomModule').throws(new Error('some error'));
    ```
  - Solution: <br/>
    ```js
    const sinon = require('sinon');
    let myRequireStub = sinon.stub(module, 'require');
    myRequireStub.withArgs('awesomeModule').throws(new Error('some error'));
    const myModule = require('awesomeModule');
    // Error: some error
    ```
<br />

## Assert
- The `node:assert` module provides a set of assertion functions for verifying invariants.
- In `assert()` function, if the value is not truth, then a AssertionError is thrown with a message
- **Methods of Assert**<br/>
  -  assert.equal(a, b)
  -  assert.strictEqual(a, b)
  -  assert.deepEqual(obj, pojo)
  -  assert.throws(() => { test(); });
  -  assert.rejects(async () => { await test(); });
- Ex:<br />
  ```js
  // Requiring the module
  const assert = require('assert').strict;
  
  // Function call
  try {
      assert(0)
  } catch(error) {
      console.log("Error:", error)
  }

  // Run File: node index.js

  // Output: Error: AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value: assert(0) at Object...
  ```

<br />

## ExpressJS
- Express JS is a small framework that works on top of Node web server functionality to simplify its APIs and add helpful new features.
- It makes it easier to organize your application’s functionality with middleware and routing.
-  **Why Express JS?**
   - Express was created to make APIs and web applications with ease
   - It saves a lot of coding time almost by half
   - Fast Server-Side Development 
   - Middleware: request handler
   - Routing 
   - Templating 
   - Debugging 
- Ex: <br />
  ```js
  const express = require('express'); 
  const app = express();
  app.get('/', (req, res) => {
    res.send("Welcome");
  });
  app.listen(4000, ()=>{
    console.log("listening to port 4000");
  });
  ```
<br />

## process.nextTick() vs setImmediate()

- **process.nextTick()**
  - process.nextTick executes callbacks immediately after the current phase
  - Fires immediately on the same phase
  - Specific to the Node.js Event Loop
  - Ex: `process.nextTick(callback);` 
  - It causes I/O starvation
  
- **setImmediate()**
  - setImmediate adds callbacks to the event queue that are executed during the check phase
  - Fires on the following iteration or ‘tick’ of the event loop
  - Found in the Timers module
  - Ex: `setImmediate(callback);`
  - Recommended to use setImmediate() as it is easy to think

- Ex:
  ```js
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immediate'));
  process.nextTick(() => console.log('nextTick'));
  console.log('current event loop');

  // Output:
  //  current event loop
  //  nextTick
  //  timeout
  //  immediate
  ```

<br />

## Buffer class
- A buffer is a space in memory (typically RAM) that stores binary data. 
- we can access these spaces of memory with the built-in Buffer class.
- Buffers store a sequence of integers, similar to an array in JavaScript. 
- Unlike arrays, you cannot change the size of a buffer once it is created.
- Buffers provide a flexible and efficient way to store and manipulate binary data
- Ex:
    ```js
    buf = new Buffer(256);    // creating an uninitiated buffer of 256 octets
    len = buf.write("Simply Easy Learning");  // Writing to buffers
    console.log("Octets written : "+  len);
    ```
- Ex:
    ```js
    const myBuffer = Buffer.from('Hello, world!'); // create buffer
    const slice = myBuffer.slice(0, 5); // Manipulate by removing unnecessary data
    console.log(slice.toString());    // Output: "Hello"
    ```

<br />

## How does Node.js handle child threads?
- With the help of `setTimeout()` and `worker_threads`
- **Node Child Process**: we use the `child_process` module to create additional threads.
  - `spawn()`: implements EventEmitterAPI
  - `fork()`: communication between parent and child via send()
  - `exec()`: match in a string
  - `execFile()`: executable file is spawned directly as a new process.

<br />

## Streams
- Streams are collections of data — just like arrays or strings.
- Streams might not be available all at once
- Really powerful when working with large amounts of data
- Data coming from an external source one chunk at a time.
- Streams
  - **Writable**: `fs.createReadStream`
  - **Readable**: `fs.createWriteStream`
  - **Duplex**: TCP socket
  - **Transform**: `zlib.createGzip` compress data
- Ex:
  - Create a big file first
    ```js
    const fs = require('fs');
    const file = fs.createWriteStream('./big.file');

    for(let i=0; i<= 1e6; i++) {
      file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
    }

    file.end();
    ```

  - Reading ~400 MB file
    ```js
    const fs = require('fs');
    const server = require('http').createServer();

    server.on('request', (req, res) => {
      fs.readFile('./big.file', (err, data) => {
        if (err) throw err;
      
        res.end(data);
      });
    });

    server.listen(8000); // Memory usage consume 400 MB
    ```

  - Reading big file with streams
    ```js
    const fs = require('fs');
    const server = require('http').createServer();

    server.on('request', (req, res) => {
      const src = fs.createReadStream('./big.file');
      src.pipe(res);
    });

    server.listen(8000); // Memory usage about 25 MB only
    ```
<br />

## Node_ENV
- NODE_ENV is an environment variable that stands for Node environment in the Express server.
- Specifies the environment in which an application is running (usually, development, staging or production)
- **Set at the time of starting the application**
  > NODE_ENV=production node app.js
- **Accessing NODE_ENV in application code**
  > process.env.NODE_ENV
<br />


## Punycode 
- Punycode is a special encoding syntax that is specifically used to convert Unicode characters (UTF-8) to ASCII
- Restricted string character set. 
- Ex:
  ```js
  const punycode = require('punycode');
  // Decode Punycode strings of ASCII
  // to Unicode symbols
  console.log(punycode.decode('manama-pta')); // mañana
  console.log(punycode.decode('--dqo34k'));  // '☃-⌘'
  ```
<br />

## Exit codes
- When exiting from any process node uses exit codes.
  - **Exit Code 0**
    - When no open async operations, Ends with 0
  - **Exit Code 1, Uncaught Fatal Exception**
    - uncaught exception occurs
  - **Exit Code 2**
    - Reserved by Bash
  - **Exit Code 3, Internal JavaScript Parse Error**
    - When internal code cannot be effectively interpreted
  - **Exit Code 4, Internal JavaScript Evaluation Failure**
    - JavaScript code fails to return the function value
  - **Exit Code 5, Fatal Error**
    - Unrecoverable error occurred in V8
  - **Exit Code 6, Non-function Internal Exception Handler** 
    - internal fatal exception handler function is set to a non-function and unable to be invoked
  - **Exit Code 7, Internal Exception Handler Run-Time Failure**
    - when the internal fatal exception handler code itself issued an error
  - **Exit Code 8** 
    - Denote an uncaught error.
  - **Exit Code 9, Invalid Argument** 
    - when an unspecified option was given
  - **Exit Code 10, Internal JavaScript Run-Time Failure**
  - **Exit Code 12, Invalid Debug Argument**
  - **Exit Code >128, Signal Exits** 
<br />

## Event emitter
- **Interaction of the user is handled through events**: 
  - mouse clicks, keyboard button presses, reacting to mouse movements, and so on.
- `emit`: used to trigger an event
- `on`: used to add a callback function that's going to be executed when the event is triggered
- `once()`: add a one-time listener
- `removeListener()` / `off()`: remove an event listener from an event
- `removeAllListeners()`: remove all listeners for an event
- Ex:
  ```js
  const EventEmitter = require('node:events');
  const eventEmitter = new EventEmitter();

  // let's create a start event
  eventEmitter.on('start', () => {
    console.log('started');
  });

  // event handler function is triggered on emit
  eventEmitter.emit('start');
  ```
<br />

## Crypto
- The `crypto` and `bycrypt` two third parties modules are used to protect sensitive data.
- **The Mechanism in Cryptography**
  - `Hashing`
    - convert a plain text to ciphertext
  - `Encryption and Decryption`
    - Encryption algorithms take input and a secret key and generate a random-looking output called a ciphertext.
- Ex:
  > npm install crypto-js --save
  ```js
  // Importing the crypto module
  const crypto = require("crypto-js")

  const data = "This is the data"
  const key = "password@111"
  
  const encrypted = crypto.AES.encrypt(data, key).toString();
  console.log("Encrypted data", encrypted); // Encrypted data: U25...

  const decrypted = crypto.AES.decrypt(encrypted, key).toString(crypto.enc.Utf8)
  console.log("Decrypted data", decrypted); // This is the data
  ```
<br />

## Why express app and server must be kept separate?
- The separation of the application logic from the server allows the code to be modular and follow a MVC (Model-View-Controller) model. 
- `app.js` is responsible for defining the routes, middleware, and other application-level functionality
- `server.js` is responsible for creating the server, listening for incoming requests, and handling errors.
- **Advantages of ‘server’ and ‘app’ separation**:
  - Data Abstraction and Encapsulation
  - Modularity
  - Scalability
  - Reusability
  
<br />

## Advantages & Disadvantage of Node
| Pros                                      | Cons                                                                            |
|------------------------------------------------------|--------------------------------------------------------------------------------------------|
| High performance                                     | Single-threaded nature                                                                     |
| Efficient handling of simultaneous connections       | Potential bottleneck for CPU-intensive tasks                                               |
| Unified use of JavaScript for server and client-side | Complexity and readability issues with asynchronous programming                            |
| Robust ecosystem through npm                         | Reliance on external modules                                                               |
| Real-time bidirectional communication                | Scalability challenges with CPU-Intensive tasks                                            |
| Large and engaged developer community                | Some modules may still be in early development stages, lacking comprehensive documentation |
| Code runs seamlessly on various operating systems    | Learning curve for developers new to asynchronous programming concepts                     |
<br />

## libuv
- Node.js relies on various dependencies under the hood for providing various features.
  - `V8`
  - `libuv`
  - `llhttp`
  - `c-ares`
  - `OpenSSL`
- `libuv`
  - libuv is a C library originally written for Node.js to abstract non-blocking I/O operations. 
  - Libuv assigns tasks to a pool of worker threads. However, all callbacks that occur on task completion are executed on the main thread. 
  - Libuv maintains an Event queue and event demultiplexer. The loop listens for incoming I/O and emits event for each request. 
  
<br />

## What is a thread pool? 
- A thread pool is a group of worker threads separate from the main event loop thread
- Execute JavaScript code and handle requests

<br />

## Global objects
- These objects are available in all modules.
  - **Buffer Class**
    - The Buffer class is an inbuilt globally accessible class that means it can be used without importing any module.
    - Used to deal with binary data as a sequence of bytes.
    - Ex:
    ```js
    const buffer = new Buffer.alloc(5, 'abcde');
    console.log(buffer); // <Buffer 61 62 63 64 65> 
    ```
    <br />
  - **TextDecoder**
    - Implementation of the WHATWG Encoding Standard TextDecoder API.
    - Ex:
    ```js
    const encoder = new TextEncoder();
    const e = encoder.encode('Welcome');
    const decoder = new TextDecoder();
    const d = decoder.decoder(e);
    console.log(d); // Welcome
    ```
    <br />
  - **global**
    - Defining a variable within this namespace makes it globally accessible. 
    - Ex: 
      > var myvar
    <br />
  - **require()**
    - used to import modules
    - Ex: 
      > var express = require('express')
    <br />
  - **URL class**
    - implemented by the following WHATWG URL Standard
  
<br />

## Connect module
- Connect's extensions are mainly there to make it easy to plug in middleware.
- The core of Connect is "using" middleware.
- Ex:
  ```js
  var connect = require('connect');
  var app = connect();
  
  // gzip/deflate outgoing responses
  var compression = require('compression');
  app.use(compression());

  // Add middleware
  app.use(function middleware1(req, res, next) {
    // middleware 1
    next();
  });

  app.use('/foo', function (req, res, next) {
    // req is the Node.js http request object
    // res is the Node.js http response object
    // next is a function to call to invoke the next middleware
  })
  ```
<br />

## passport
- Passport uses the concept of strategies to authenticate requests. 
- Passport has a comprehensive set of over 480 authentication strategies covering social networking, enterprise integration, API services, and more.
- Ex:
  - `userDetails.js`
    ```js
    const mongoose = require('mongoose');
    const passportLocalMongoose = require('passport-local-mongoose');
    require('dotenv').config();

    // Connecting Mongoose
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Setting up the schema
    const User = new mongoose.Schema({
      username: String,
      password: String,
    });

    // Setting up the passport plugin
    User.plugin(passportLocalMongoose);

    module.exports = mongoose.model('User', User);
    ```
    <br />
  - `index.js`
    ```js
    const passport = require('passport');
    const UserDetails = require('./userDetails');

    // Set up Passport
    app.use(passport.initialize());
    app.use(passport.session());

    // set up the local authentication.
    passport.use(UserDetails.createStrategy());
    passport.serializeUser(UserDetails.serializeUser());
    passport.deserializeUser(UserDetails.deserializeUser());

    //  run index.js only once
    UserDetails.register({username:'nemo', active: false}, '123');
    ```

<br />

## put and patch in context of rest api
- `Put`
  - PUT is used to replace the entire resource with a new representation, meaning that all the fields of the resource are sent in the request body, even if they are not modified.
  - It has High Bandwidth 
- `Patch`
  - PATCH is used to apply partial updates to a resource, meaning that only the fields that need to be changed are sent in the request body.
  - Performance improvements
  - Avoid overwriting or losing data
  - Allow flexibility by support of JSON patch or JSON merge patch.
  - Drawbacks if server does not support patch
  - It has Low Bandwidth 
<br />

## Options method in context of rest api
- When you are using a cross origin request (CORS), the browser or application will send an OPTIONS petition first to make sure you have the privileges to execute a petition like POST, GET, PUT, etc.
- If you don’t have your server configured to handle an OPTIONS request, your “real” petition (GET, POST, etc) will not be process by the API, because it will respond to the OPTIONS petition and “forget” about the actual request.
- How can we fix it? By using `cors` plugin
  > npm install cors
- Ex.:
    ```js
    var express = require('express');
    var router = express.Router();
    var cors = require('cors');
    var clientController = require('../component/client');

    router.options('/', cors());
    router.post('/', cors(), clientController);
    module.exports = router;
    ```
<br />

## How to connect mysql or postgress 
- Install the MySQL or postgress
  > npm install mysql
- Create a Connection
  ```js
  const mysql = require('mysql');

  const connection = mysql.createConnection({
    host: 'your-database-host',
    user: 'your-username',
    password: 'your-password',
    database: 'your-database-name'
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the remote database!');
  });
  ```
- Query
  ```js
  function fetchData() {
    const query = 'SELECT * FROM your_table_name';

    connection.query(query, (err, results) => {
      if (err) throw err;
      console.log('Data fetched:', results);
    });
  }

  fetchData();
  ```
<br />

## Security implementation
- `helmet` library
  - The helmet() middleware automatically removes unsafe headers
    ```js
    const express = require('express');
    const helmet = require('helmet');

    const app = express();

    // register the helmet middleware
    // to set the security headers
    app.use(helmet());
    ```
    <br />
- `rate-limiter-flexible` library
  - controlling the incoming traffic
    ```js
    const express = require('express');
    const { RateLimiterMemory } = require('rate-limiter-flexible');
    const app = express();

    const rateLimiter = new RateLimiterMemory({
      points: 10, // maximum number of requests allowed
      duration: 1, // time frame in seconds
    });

    const rateLimiterMiddleware = (req, res, next) => {
      rateLimiter.consume(req.ip)
          .then(() => {
              // request allowed, 
              // proceed with handling the request
              next();
          })
          .catch(() => {
              // request limit exceeded, 
              // respond with an appropriate error message
              res.status(429).send('Too Many Requests');
          });
      };

    app.use(rateLimiterMiddleware);
    ```
    <br />
- Limit Request Size - `body-parser` library
  - DDoS attacks where malicious users try to flood your server with data
    ```js
    const express = require('express');
    const bodyParser = require('body-parser');

    const app = express();

    // set the request size limit to 1 MB
    app.use(bodyParser.json({ limit: '1mb' }));
    ```
    <br />
- Use Security Linters - `eslint-plugin-security` plugin
  - Analyze your codebase to identify vulnerabilities, unsafe code sections, and best practice violations.

<br />

- Prevent SQL Injection
  - Use Prepared Statements or Parameterized Queries
    - separating the SQL code from the user input
  - Input Sanitization:
    - Validate user input to reject malicious data
  - Use an ORM:
    - ORM technologies like Sequelize generally provide built-in protection against SQL injection.

<br />

## Javascript vs Node

| Javascript                                                                 | Node                                                                               |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Type: Programming language                                                 | Interpreter and environment for Javascript                                         |
| Used for any client-side activity for a web application                    | Used for accessing or performing any no-blocking operation of any operatig system. |
| Engine: V8(Google Chrome), Spider Monkey(Firefox), Javascript Core(Safari) | V8 (Google Chrome)                                                                 |

<br />

## Angular vs Node
| Angular                                                                    | Node                                                                               |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Open source web application development framework                          | Cross-platform run-time environment for applications.                              |
| Written in TypeScript                                                      | Written in C,C++ and Javascript                                                    |
| Used for building single-page client-side web applications.                | Used for building fast and scalable server side networking applications.           |
| Itself is web application framework                                        | It has many frameworks like Sails.js, Partial.js and Express.js                    |
| Ideal for creating highly active and interactive web apps.                 | Ideal for developing small size projects.                                          |
| Suitable for developing real-time applications.                            | Suitable for faster and scalable applications                                      |

<br />

## How to validate api parameters
  ```js
  // Inside the route. 
  if (!request.phone_number) {
      throw new Error('Main request parameter not present.');
  }
  ```
<br />

## Node db caching
- Caching involves storing frequently accessed data in a temporary storage location that allows for fast lookups

1. **In-Memory Caching**
     - In-memory caching stores data in the application’s memory space.
       ```js
       // Set up Redis client 
       const redis = require("redis");
       const client = redis.createClient();

       // Simple set and get example
       client.set("key", "value", (err, reply) => {
         console.log(reply); // OK

         client.get("key", (err, reply) => {
           console.log(reply); // value
         });
       });
       ```
       <br />

2. **Distributed Caching**
   - Cached data is distributed across multiple nodes, allowing for horizontal scalability.
    ```js
    // Create Redis client 
    const redis = require("redis");
    const client = redis.createClient({
      url: "redis://user:pass@cache-1:6379"  
    });

    // Cache value across distributed cluster
    client.set("key", "value");
    ```
    <br />

3. **Content delivery networks (CDNs)**
     - Content delivery networks (CDNs) like Cloudflare and Akamai operate globally distributed caching servers. 
     - They are useful for caching static assets like images, CSS, and JS files.
      ```js
      // Serve images from CDN 
      app.use("/images", express.static("images"));

      // Configure CDN origin 
      const CDN_URL = "https://cdn.example.com";

      app.get("/images/avatar.png", (req, res) => {
        res.redirect(CDN_URL + req.path); 
      });
      ```
      <br />
<br />