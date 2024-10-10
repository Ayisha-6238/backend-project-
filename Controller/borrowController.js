const borrowModel = require("../model/borrowModel")



module.exports.borrowBook=async(req,res)=>{
    const Id = req.params.id

    const borrowDetails={
        userId:req.user.id,
        bookId:Id
        // returnData:req.body.returnData,
        // due:req.body.due
    }
    const book=await borrowModel.create(borrowDetails)
    res.json(book)
}

module.exports.borrowingBookDetail=async(req,res)=>{
    const Id = req.params.id
    const book=await borrowModel.find({bookId:Id})
       console.log(book);
       
    if(book){
        res.json(book)
    }else{
        res.json({message:"book not found"})
    }
}

module.exports.returnBook=async(req,res)=>{
    const bookId=req.params.id
    await borrowModel.findByIdAndUpdate(bookId,{returnDate:true})
    res.json({message:"book returned"})
}