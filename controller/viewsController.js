const Player = require("../model/playerModel");

exports.getOverview = async (req, res, next) => {
  // 1 - Get tour data from collection
  const players = await Player.find();

  // 3 - Render that template using tour data from 1
  res.status(200).render("overview", {
    title: "All players",
    players: players,
  });
};

exports.getPlayer = async (req, res) => {
  const player = await Player.findById(req.params.id);

  res.status(200).render("player", {
    title: "Specific player",
    player: player,
  });
};
