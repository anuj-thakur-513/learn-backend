const internals = require("./internals");
// const { send } = "./internals/request.js";
// const { read } = require("./response.mjs");

function makeRequest(url, data) {
  internals.request.send(url, data);
  return internals.response.read();
}

const responseData = makeRequest("https://www.google.com", "hello");
console.log(responseData);
