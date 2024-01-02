const express = require("express");
const router = express.Router();
const viewController = require("../controller/viewsController");

router.route(`/`).get(viewController.getOverview);

module.exports = router;
