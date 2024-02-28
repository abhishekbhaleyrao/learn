const events = require("events");
const myEmitter = new events.EventEmitter();
// Listener 1 for 'eventA'
myEmitter.on("eventA", () => {
  console.log("Listener 1 for eventA executed");
});
// Listener 2 for 'eventA'
myEmitter.on("eventA", () => {
  console.log("Listener 2 for eventA executed");
});
// Emitting 'eventA'
myEmitter.emit("eventA");
/* Output:
    Listener 1 for eventA executed
    Listener 2 for eventA executed
  */
