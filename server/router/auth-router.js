const express = require("express")
const router = express.Router()
const {home} = require("../controllers/auth-controller");
const { register } = require("../controllers/auth-c-register");


router.route("/").get(home);
router.route("/register").get(register);


// hello

module.exports = router;