const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send({
    id: 1,
    name: "Nikola Tesla",
  });
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Tesla</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
