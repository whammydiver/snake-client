const net = require("net");

const moveArray = ['up', 'up', 'up', 'left', 'left', 'left', 'down', 'down', 'down', 'right', 'right', 'down']

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
    
  })
  
  const move = function(direction) {
    conn.write(`Move: ${direction}`);
  };
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log('Successfully connected to the snake server');
  })

  conn.write('Name: PIT');

  for (let x = 0; x < moveArray.length; x++) {
    setTimeout(() => move(moveArray[x]), 500 * x);
  }


  //setTimeout(() => {
    //(conn.write('Move: up'), 200)
  //});

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };