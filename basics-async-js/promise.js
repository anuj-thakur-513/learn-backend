const promise1 = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff Worked");
  } else {
    reject("Error, it broke!");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HIII");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "POOKIE");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Is it me you are looking for?");
});

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

// promise1
//   .then((result) => result + "!")
//   .then((result2) => {
//     throw Error;
//     console.log(result2);
//   })
//   .catch(() => console.log("error!"));
