import express, { json } from "express";
import axios from "axios";
import client from "./client.js";

const app = express();

app.get("/", async (req, res) => {
  const cacheValue = await client.get("posts");

  if (cacheValue) {
    console.log("Data is from cache");
    return res.json(JSON.parse(cacheValue));
  }

  console.log("Data is not from cache");

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  await client.set("posts", JSON.stringify(data));
  await client.expire("posts", 30);
  res.json(data);
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
