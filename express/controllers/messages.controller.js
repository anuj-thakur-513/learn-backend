const path = require("path");
const model = require("../models/friends.model");

// GET messages from the server
function getMessages(req, res) {
  // const file = path.join(
  //   __dirname,
  //   "..",
  //   "public",
  //   "images",
  //   "skimountain.jpg"
  // );
  // res.sendFile(file);
  // res.send("<ul><li>Hello Tesla</li></ul>");
  const randomFriend =
    model.friends[Math.floor(Math.random() * model.friends.length)];

  res.render("messages", {
    title: "Message to my Friend",
    friend: randomFriend.name,
  });
}

// POST message to the server
function postMessage(req, res) {
  console.log("Updating messages...");
  res.end();
}

module.exports = {
  getMessages,
  postMessage,
};
