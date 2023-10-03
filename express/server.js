const express = require("express");

const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

// middleware function
app.use((req, res, next) => {
  const start = Date.now();
  next();
  // actions go here...
  const delta = Date.now() - start;
  console.log(
    `Method: ${req.method}, URL: ${req.url}, Time Taken for Req.: ${delta}ms`
  );
});

app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);
  res.json(newFriend);
});

app.get("/", (req, res) => {
  res.json(friends);
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = +req.params.friendId; // converting to number using '+' sign
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Tesla</li></ul>");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
