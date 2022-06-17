const net = require("net");
const { IP, PORT } = require('./constants'); // brings in constrained variables 

const connect = function() { //creates connection to the game server
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.setEncoding("utf8"); // sets encoding to UTF 8
  
  conn.on('connect', () => { //confirms connection to user
    console.log('Successfully connected to the snake server');
  });
  
  conn.write('Name: PIT'); //submits user initials to Server

  conn.on("data", (data) => { // listens for server response and prints it to console
    console.log("Server says: ", data);
  });

  return conn; // returns connection details
};

module.exports = { connect };