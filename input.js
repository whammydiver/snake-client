const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  })
  
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

module.exports = { setupInput, connect };

