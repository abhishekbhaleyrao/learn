const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

// Running in Node's single thread
setTimeout(() => console.log("Timer 1"), 0);
setImmediate(() => console.log("Immediate 1"));

fs.readFile("package.json", () => {
  // Running in Node's single thread
  console.log("Inside I/O");
  console.log("-----------------");

  // Running in event-loop
  setTimeout(() => console.log("Timer 2"), 0);
  setTimeout(() => console.log("Timer 3"), 3000);
  setImmediate(() => console.log("Immediate 2"));
  // Running in mircotasks queue
  process.nextTick(() => console.log("Process.nextTick"));
  // Running in event-loop
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted 1");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted 2");
  });
  // Synchronous blocking Node's single thread
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted Sync 1");
  crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
  console.log(Date.now() - start, "Password encrypted Sync 2");
});

// Running in Node's single thread
console.log("Hello from top-level");
