
const jwt = require("jsonwebtoken");
// const user = require("../model/userModel")

const verification = async (req, res, next) => {
    const token = req.cookies.accessToken
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                res.json({ message: "accessed denied" })
            } else {
                req.user = user
                next()
            }
        })
    } else {
        res.json({ message: "access denied" })
    }

}


module.exports = verification;