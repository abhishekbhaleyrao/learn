const EventEmitter = require("events");

// 1. Create Custom EventEmitter
const myEmitter1 = new EventEmitter();
// Event listener for 'myEvent'
myEmitter1.on("myEvent", () => {
  console.log("myEvent Called");
});
// Emitting the 'myEvent'
myEmitter1.emit("myEvent");

// 2. Create Custom class EventEmitter(Best Pratice): myEmitter2 class inheriting eventEmitter class
class MyEmitter extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter2 = new MyEmitter();
// Event listener for 'customEvent'
myEmitter2.on("customEvent", (arg1, arg2) => {
  console.log("Event received with arguments:", arg1, arg2);
});
// Emitting the 'customEvent'
myEmitter2.emit("customEvent", "Hello", "World");
