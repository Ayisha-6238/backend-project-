

const books=require("../model/bookModel")

module.exports.addBook=async(req,res)=>{
    const book=await books.create(req.body)
    res.json(book)
}
module.exports.getBooks=async(req,res)=>{
    const book=await books.find()
    res.json(book)
}
module.exports.getOneBook=async(req,res)=>{
    const bookId= req.params.id
    const book=await books.findById(bookId)
    res.json(book)
}
module.exports.updateBook=async(req,res)=>{
    const bookId= req.params.id
    await books.findByIdAndUpdate(bookId,req.body)
    res.json({message:"data updated"})
}
module.exports.deleteBook=async(req,res)=>{
    const bookId= req.params.id
    await books.findByIdAndDelete(bookId,req.body)
    res.json({message:"data deleted"})
}
