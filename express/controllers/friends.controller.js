const model = require("../models/friends.model");

// POST request for adding friend
function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.friends.length,
  };

  model.friends.push(newFriend);
  res.json(newFriend);
}

// GET all the friends
function getFriends(req, res) {
  res.json(model.friends);
}

// GET specific friend using ID
function getFriend(req, res) {
  const friendId = +req.params.friendId; // converting to number using '+' sign
  const friend = model.friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
