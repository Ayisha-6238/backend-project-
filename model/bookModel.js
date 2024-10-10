
const mongoose=require("mongoose")


const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
    type:String,
    required:true
    },
    rating:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        default:true
    },
    role:{
        type:String,
        default:"librarian"
    }
})


const bookModel=mongoose.model("book",bookSchema)
module.exports=bookModel;