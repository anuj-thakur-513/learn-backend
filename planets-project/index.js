const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

const isHabitablePlanet = function (planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

fs.createReadStream("kepler-data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (e) => {
    console.log(e);
  })
  .on("end", () => {
    console.log(habitablePlanets);
    console.log(
      `Found ${habitablePlanets.length} habitable planets like earth!!!`
    );
  });
