const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Player = require("../model/playerModel");

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log(`DB connection successfully established`));

// READ JSON FILE
const players = JSON.parse(
  fs.readFileSync(`${__dirname}/players.json`, "utf-8")
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Player.create(players);
    console.log(`Data successfully loaded`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Player.deleteMany();
    console.log(`Data successfully deleted`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === `--import`) {
  importData();
} else if (process.argv[2] === `--delete`) {
  deleteData();
}

console.log(process.argv);
