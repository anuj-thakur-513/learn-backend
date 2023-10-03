// GET messages from the server
function getMessages(req, res) {
  res.send("<ul><li>Hello Tesla</li></ul>");
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
