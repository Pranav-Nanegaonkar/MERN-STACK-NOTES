const client = require("./client.js");

async function init() {
//   await client.set("msg:10", "hey from Node js");
  await client.expire("msg:10", 10);
  const result = await client.get("msg:10");
  console.log("Result -> ", result);
}

init();
