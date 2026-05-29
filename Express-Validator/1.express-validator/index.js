const express = require("express");
const {
  body,
  validationResult,
  query,
  matchedData,
} = require("express-validator");
const app = express();

app.use(express.json());
app.get("/hello", query("person").notEmpty(), (req, res) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    const data = matchedData(req);
    return res.send(`Hello, ${data.person}!`);
  }
  res.send({ errors: result.array() });
});

app.post(
  "/newsletter",
  body("email").isEmail().trim(),
  query("search_query").notEmpty().trim(),
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const data = matchedData(req);
      return res.send(
        `Thank you for subscribing, ${data.email}! ${data.search_query}`
      );
    }
    res.send({ errors: result.array() });
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
