const net = require("net");
const connect = require('./client.js').connect;
const setupInput = require('./input.js').setupInput

console.log("Connecting ...");
connect();
setupInput();