const { connect } = require("./client");
const { setupInput } = require('./input');

console.log('Connecting...');
let move = connect(); //assigns the connect() function return value (conn) to a variable name

setupInput(move); // calls setupInput with conn details

