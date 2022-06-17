const { movesAndSmackTalk } = require("./constants");

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key in movesAndSmackTalk) {
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

