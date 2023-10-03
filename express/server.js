const express = require("express");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();
const PORT = 3000;

// middleware function
app.use((req, res, next) => {
  const start = Date.now();
  next();
  // actions go here...
  const delta = Date.now() - start;
  console.log(
    `Method: ${req.method}, URL: ${req.baseUrl}${req.url}, Time Taken for Req.: ${delta}ms`
  );
});

// built-in middleware to parse JSON in post request
app.use(express.json());

// using ROUTER to add routes into the application
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
