const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./.env" });

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection, shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log(`DB connection successfully established`));
