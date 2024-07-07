// Predict the order of console logs in the following code:

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

process.nextTick(() => console.log("4"));

setImmediate(() => console.log("5"));

console.log("6");
