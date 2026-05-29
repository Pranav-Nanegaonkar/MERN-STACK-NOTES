import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(import.meta.url);
console.log(__filename);
console.log(__dirname);
console.log(path.join(__dirname, "..", "client", "dist"));
// Middleware
app.use(express.json());

// Serve Vite build
// app.use(express.static(path.join(__dirname, "..", "client", "dist")));
// app.get("/api/assets/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "..", "client", "dist", req.params[0]));
// });

// // React Router fallback
// app.get(/.*/, (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "client", "dist", "vite.svg"));
// });

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
