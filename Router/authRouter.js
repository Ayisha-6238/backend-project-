const express=require("express")
const authController=require("../Controller/authController")
const verification=require("../middleware/auth")
const checkRole = require("../middleware/checkrole")


const router= express.Router()
router.use(express.json())

router.post("/register",authController.register)
router.post("/login",authController.login)
router.get("/profile",verification,checkRole(["admin","user","librarian"]),authController.profile)
router.put("/profile",verification,checkRole(["admin","user","librarian"]),authController.updateProfile)

module.exports=router;
