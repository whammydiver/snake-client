const { connect } = require("./client");
const { setupInput } = require('./input');

console.log('Connecting...');
let move = connect();

setupInput(move);

