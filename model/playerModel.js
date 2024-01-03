const mongoose = require("mongoose");
const validator = require("validator");

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, `A player must have a name`],
    unique: true,
    trim: true,
    validate: {
      validator: function (value) {
        return validator.isAlpha(value.split(" ").join(""));
      },
      message: "name must only contain characters.",
    },
  },
  slug: String,
  age: Number,
  photo: String,
  position: String,
  active: Boolean,
  images: [String],
  points: Number,
  assists: String,
  rebound: String,
  rings: String,
  teams: [String],
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
