const client = require("./client");

async function init() {
  //   await client.lpush("messages", 1);
  //   await client.lpush("messages", 2);
  //   await client.lpush("messages", 3);
  //   await client.lpush("messages", 4);
  //   await client.lpush("messages", 5);
  //   await client.lpush("messages", 6);
  //   await client.lpush("messages", 7);
  //   await client.lpush("messages", 8);
  const result = await client.blpop("messages", 10);
  console.log(result);
}

init();
