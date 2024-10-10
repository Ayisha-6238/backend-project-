const express=require("express")
const bookController=require("../Controller/bookController")
const  borrowController = require("../Controller/borrowController")
const verification=require("../middleware/auth")
const checkRole = require("../middleware/checkrole")

const router=express.Router()
router.use(express.json())

router.post('/',verification,bookController.addBook)
router.get('/',bookController.getBooks)
router.get('/:id',bookController.getOneBook)
router.put('/:id',verification,checkRole(["admin","librarian"]),bookController.updateBook)
router.delete('/:id',verification,checkRole(["admin","user","librarian"]),bookController.deleteBook)

// borrow
router.post("/:id/borrow",verification,borrowController.borrowBook)
router.get("/:id/borrowings",verification,checkRole(["admin","librarian","user"]),borrowController.borrowingBookDetail)
router.post("/:id/return",verification,checkRole(["user"]),borrowController.returnBook)




module.exports=router;