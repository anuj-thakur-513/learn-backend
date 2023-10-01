const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

fs.createReadStream("kepler-data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (e) => {
    console.log(e);
  })
  .on("end", () => {
    console.log(results);
    console.log("done");
  });
