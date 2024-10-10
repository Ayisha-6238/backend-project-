const jwt=require("jsonwebtoken")

const checkRole = (roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            next()
        } else {
            res.json({ message: "access denied" })
        }
    }
}
module.exports=checkRole;