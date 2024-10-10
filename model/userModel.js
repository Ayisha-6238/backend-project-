const mongoose=require("mongoose")
const bcrypt=require("bcrypt")


const userSchema=mongoose.Schema({
username:{
    type:String,
required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    require:true
},
role:{
    type:String,
    default:["user","librarian"],
    default:"user"
}

})
userSchema.pre("save",async function (next) {
    if(!this.isModified("password")){
        return next();
    }this.password=await bcrypt.hash(this.password,10)
    
})


const userModel=mongoose.model("user",userSchema);
module.exports =userModel;
