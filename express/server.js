const express = require("express");
const path = require("path");
const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const rootRouter = require("./routes/root.router");

const app = express();
app.set("view engine", "hbs"); // setting the template engine for dynamic HTML
app.set("views", path.join(__dirname, "views"));

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

// middleware used to serve the front-end
const directory = path.join(__dirname, "public");
app.use(express.static(directory));

// built-in middleware to parse JSON in post request
app.use(express.json());

// using ROUTER to add routes into the application
app.use("/", rootRouter);
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
