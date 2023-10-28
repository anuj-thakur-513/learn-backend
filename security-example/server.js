const fs = require("fs");
const path = require("path");
const https = require("https");
const helmet = require("helmet");
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 3000;
const config = {
  CLIENT_ID: process.env.GOOGLE_AUTH_CLIENT_ID,
  CLIENT_SECRET: process.env.GOOGLE_AUTH_CLIENT_SECRET,
};

const options = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};

app.use(helmet());

// middleware to check if the user is logged in
function checkLoggedIn(req, res, next) {
  const isLoggedIn = true; //TODO
  if (!isLoggedIn) {
    return res.status(401).json({
      error: "You must log in",
    });
  }
  next();
}

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/auth/google", (req, res) => {});

app.get("/auth/google/callback", (req, res) => {});

app.get("/auth/logout", (req, res) => {});

app.get("/secret", checkLoggedIn, (req, res) => {
  return res.send("Your personal secret value is 42!");
});

https.createServer(options, app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
