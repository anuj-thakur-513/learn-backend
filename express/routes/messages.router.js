const express = require("express");
const messagesController = require("../controllers/messages.controller");

const messagesRouter = express.Router();

messagesRouter.use((req, res, next) => {
  console.log(`ip address: ${req.ip}`);
  next();
});

messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.postMessage);

module.exports = messagesRouter;
