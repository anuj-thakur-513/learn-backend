const express = require("express");
const rootController = require("../controllers/root.controller");

const rootRouter = express.Router();

rootRouter.use((req, res, next) => {
  console.log(`ip address: ${req.ip}`);
  next();
});

rootRouter.get("/", rootController.getData);

module.exports = rootRouter;
