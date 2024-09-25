const express = require("express");
const loginController = require("../controllers/loginController");

const router = express.Router();

router.get("/login", loginController.exibirPaginaLogin);
router.post("/autenticar", loginController.autenticarUser);
router.get("/deslogar", loginController.deslogarUser);

module.exports = router;