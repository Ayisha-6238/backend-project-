const express=require("express")
const dbconnection = require("./Configuration/dbconfig")
require("dotenv").config()
const authRouter=require("./Router/authRouter")
const bookRouter=require("./Router/bookRouter")
const cookie = require("cookie-parser")
const  admin = require("./Router/adminRouter")


const app=express()
dbconnection()
app.use(cookie())


app.use("/auth",authRouter)
app.use("/book",bookRouter)
app.use("/admin",admin)

app.listen(3000,()=>{
    console.log("server is connected");
    
})