const Player = require("../model/playerModel");

exports.getOverview = async (req, res, next) => {
  // 1 - Get tour data from collection
  const players = await Player.find();

  // 2 - Build template

  // 3 - Render that template using tour data from 1
  res.status(200).render("overview", {
    title: "All players",
    players: players,
  });
};
