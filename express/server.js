const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();
const PORT = 3000;

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

// built-in middleware to parse JSON in post request
app.use(express.json());

app.post("/friends", friendsController.postFriend);

app.get("/", friendsController.getFriends);

app.get("/friends", friendsController.getFriends);

app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);

app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
