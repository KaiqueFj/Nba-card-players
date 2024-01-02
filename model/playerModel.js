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
  position: String,
  active: Boolean,
  images: [String],
  points: Number,
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
