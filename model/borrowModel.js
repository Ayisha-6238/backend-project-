const mongoose=require("mongoose")

const borrowSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    },
    borrowDate:{
        type:Date,
        default:new Date()
    },
    returnDate:{
        type:Boolean,
        default:false
    
    }
})

const borrowModel=mongoose.model("borrow",borrowSchema);
module.exports=borrowModel;