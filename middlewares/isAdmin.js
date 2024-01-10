const UserModel = require("../model/userModel")

const isAdmin =async(req,res)=>{

    const userId= req.body
    const  adminCheck = await UserModel.find(userId)
    if(adminCheck==true){
        res.send("mje kr")
    }
    else{
        res.send("You are not admin")
    }
}

module.exports=isAdmin