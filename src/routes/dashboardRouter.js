const express = require("express");
const dashboardController = require("../controllers/dashboardController");
const authentication = require("../middlewares/authentication");

const router = express.Router();

router.get("/dashboard", authentication.protegerRota, dashboardController.exibirPaginaDashboard);

module.exports = router;