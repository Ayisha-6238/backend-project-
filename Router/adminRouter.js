const express=require("express")
const adminController=require("../Controller/adminController")
const verification=require("../middleware/auth")
const checkRole = require("../middleware/checkrole")
const router=express.Router()
router.use(express.json())

router.get("/users",verification,checkRole(["admin"]),adminController.getUsers)
router.delete("/users/:id",verification,checkRole(["admin"]),adminController.deleteUser)
router.get("/books",verification,checkRole(["admin"]),adminController.getAllbooks)
router.get("/borrowings",verification,checkRole(["admin"]),adminController.getAllborrowings)


module.exports=router