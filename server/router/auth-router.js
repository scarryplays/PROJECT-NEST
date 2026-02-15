const express = require("express")
const router = express.Router()
const {home} = require("../controllers/auth-controller");
const { register } = require("../controllers/auth-c-register");
const { login } = require("../controllers/auth-c-login");
const { project } = require("../controllers/auth-c-project")
const {authMiddleware} = require("../middlewares/auth-middleware");
const { getUserProjects } = require("../controllers/auth-c-project");
const { deleteProject } = require("../controllers/auth-c-project-dl");
const { updateProject } = require("../controllers/auth-c-project-up");


router.route("/").get(home);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/project").post(authMiddleware, project);
router.route("/projects").get(authMiddleware, getUserProjects);
router.route("/project/:id").delete(authMiddleware, deleteProject);
router.route("/project/:id").put(authMiddleware, updateProject);


// hello

module.exports = router;