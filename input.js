const { movesAndSmackTalk } = require("./constants"); // accesses input key commands

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') { // cntr-C cancel command
    process.exit();
  }

  if (key in movesAndSmackTalk) { // compares input to object keys and sends corresponding value if found
    connection.write(`${movesAndSmackTalk[key]}`);
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

