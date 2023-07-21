const {Router} = require("express");
const router = Router();
const {login, register, logout, profile} = require("../controllers/authController");
const { authRequire } = require("../middlewares/validateToken");

router.post("/register", register )
router.post("/login", login)
router.post("/logout", logout)
router.get("/profile", authRequire ,profile)

module.exports = router;