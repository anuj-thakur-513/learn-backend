// ASYNC AWAIT

// movePlayer(100, "Left")
//   .then(() => movePlayer(400, "Left"))
//   .then(() => movePlayer(10, "Right"))
//   .then(() => movePlayer(350, "Left"));

// async function palyerStart() {
//   const firstMove = await movePlayer(100, "Left"); //pause
//   await movePlayer(400, "Left"); // pause
//   await movePlayer(10, "Right"); // pause
//   await movePlayer(350, "Left"); // pause
// }

// practical example
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );

    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (e) {
    console.log("err: ", e);
  }
};

// for of
const loopThroughUrls = (url) => {
  for (url of urls) {
    console.log(url);
  }
};

// for await of
const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

getData2();
