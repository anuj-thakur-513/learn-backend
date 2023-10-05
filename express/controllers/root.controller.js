function getData(req, res) {
  res.render("index", {
    title: "My Friends",
    caption: "Let's go skiing",
  });
}

module.exports = {
  getData,
};
