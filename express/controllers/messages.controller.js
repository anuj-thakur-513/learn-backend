const path = require("path");

// GET messages from the server
function getMessages(req, res) {
  const file = path.join(__dirname, "..", "public", "skimountain.jpg");
  res.sendFile(file);
  // res.send("<ul><li>Hello Tesla</li></ul>");
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
