import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use("/", (req, res) => {
  res.status(200).json({ status: "success", message: "Test Docker" });
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
});
