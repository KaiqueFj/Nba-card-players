const express = require("express");
const playerController = require("../controller/playerController");
const router = express.Router();

router.route(`/`).get(playerController.getPlayers);

router.route(`/:id`).get(playerController.getPlayer);

module.exports = router;
