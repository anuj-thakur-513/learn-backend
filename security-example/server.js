const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/secret", (req, res) => {
  return res.send("Your personal secret value is 42!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
