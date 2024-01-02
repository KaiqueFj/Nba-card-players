const Player = require("../model/playerModel");

exports.getPlayers = async (req, res) => {
  const player = await Player.find();

  res.status(200).json({
    status: "success",
    data: player,
  });
};

exports.getPlayer = async (req, res) => {
  const player = await Player.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: player,
  });
};
