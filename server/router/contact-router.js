const express = require("express")
const router = express.Router()
// const {home} = require("../controllers/auth-controller");
// const { register } = require("../controllers/auth-c-register");
// const { login } = require("../controllers/auth-c-login");
// const { project } = require("../controllers/auth-c-project")
const contactForm = require("../controllers/auth-c-contact");

router.route("/contact").post(contactForm);



module.exports = router;