const { connect } = require("./client");

let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  } 
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === '1') {
    connection.write('Say: Eat my shorts');
  }
  if (key === '2') {
    connection.write('Say: Slither on, yo.');
  }
  if (key === '3') {
    connection.write('Say: Snake or snail?');
  }
  if (key === '4') {
    connection.write('Say: Speed Demon 2000!');
  }
};

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};



module.exports = { setupInput };

