const express = require("express")
const router = express.Router()
const {home} = require("../controllers/auth-controller");
const { register } = require("../controllers/auth-c-register");
const { login } = require("../controllers/auth-c-login");


router.route("/").get(home);
router.route("/register").post(register);
router.route("/login").post(login);


// hello

module.exports = router;