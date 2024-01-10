const mongoose =require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    phone:Number,
    password:String,
    age:Number,
    email:String,
    isAdmin:{type:Boolean,default:false}
}
,{strict:false}
)

const UserModel =mongoose.model("user",userSchema)
module.exports=UserModel
