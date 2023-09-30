// ASYNC AWAIT

movePlayer(100, "Left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(350, "Left"));

async function palyerStart() {
  const firstMove = await movePlayer(100, "Left"); //pause
  await movePlayer(400, "Left"); // pause
  await movePlayer(10, "Right"); // pause
  await movePlayer(350, "Left"); // pause
}

// practical example
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
