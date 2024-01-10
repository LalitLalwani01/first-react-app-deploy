const express =require("express")
const UserModel = require("../model/userModel")
const router =express.Router()

router.get("/",async(req,res)=>{

    const userId= req.userId
        
    let isAdminCheck= await UserModel.findById(userId)

    // let isAdminCheck =UserModel.find({authorization:req.headers.authorization})
    console.log(isAdminCheck,"this is admin")
    
    // console.log(isAdminCheck)
    let databaseAdmin = isAdminCheck[0].isAdmin
    if(databaseAdmin==true){

        res.send("hello")
    }
    else{
        res.send("You are not admin")
    }
})
module.exports=router