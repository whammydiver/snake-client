const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541

  })
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log('Successfully connected to the snake server');
  })


  conn.write('Name: PIT');
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };