const borrowModel = require("../model/borrowModel")
const userModel=require("../model/userModel")

module.exports.getUsers=async(req,res)=>{
    const users=await userModel.find()
    res.json(users)
}

module.exports.deleteUser=async(req,res)=>{
    const userId=req.params.id
    await userModel.findByIdAndDelete(userId)
    res.json({message:"user deleted"})

}

module.exports.getAllbooks=async(req,res)=>{
    const books=await userModel.find()
    res.json(books)
}

module.exports.getAllborrowings=async(req,res)=>{
    const borrowings=await borrowModel.find()
    res.json(borrowings)
}
