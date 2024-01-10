const isAdmin = require("../middlewares/isAdmin");
const UserModel =require("../model/userModel")
var jwt = require('jsonwebtoken');
const bcrypt =require("bcrypt")




let data=[{id:1,name:"lalit",age:20},
{id:2,name:"mohan",age:23},
{id:3,name:"sohan",age:29},
{id:4,name:"rohan",age:22},
]

const getAllUsers =(req,res)=>{
   
    // console.log("The length of userData is",userData.length)
    res.send(data)
}

const getUserById =async(req,res)=>{
    try {
        const userId= req.params.userId
        
        let userData= await UserModel.findById(userId)
     //    let userData=data.find((eachobj)=>eachobj.id==userId)
        if(userData){
            res.status(200).send(userData)
        }
        else{
            res.status(404).send("Enter a valid id ")   
        }
        
    } catch (error) {
        res.status(404).send(error)
        
    }
       // console.log("reach here") 
  
    
}

let  addNewUser = async(req,res)=>{
    try{
     const newItem =req.body;
        let pass=newItem.password
        console.log(pass)

    let newUser =new UserModel({
        name:newItem.name,
        phone:newItem.phone,
        password:newItem.password,
        email:newItem.email, 
        age:newItem.age,
        isAdmin:newItem.isAdmin? true:false        
    })
       await  bcrypt.hash(pass, 10, function(err, hash) {
        if(err){
            console.log(err)
            return
        }
        else{
            console.log(hash)
          
            pass=hash
            // newItem.password=pass
            // console.log(newItem.password)
        }
    })

            // Load hash from your password DB.
// bcrypt.compare(newUser.password, hash, function(err, result) {
 
// });
     
        
        // Store hash in your password DB.

    
    await newUser.save();
    // newItem.id =data.length +1
    // data.push(newItem)

    res.status(201).send(newUser)
}
catch(error){
    res.status(404).send(error.message)
}
}


const updateUserData= async(req,res) =>{
    try {    
        const userId =req.params.userId
        const userData=req.body
    
        // let index = data.findIndex((eachobj)=>eachobj.id==userId)
   let updateUser= await UserModel.findByIdAndUpdate(userId,userData)
        if(updateUser){
            // data[index].name =userData.name
            res.send(updateUser)
        }
        else{
            res.send("please give proper id bhai")
        }
        
    } catch (error) {
        res.status(404).send(error)
    }

}

const deleteUserData =async(req,res)=>{
    try {  
         const userId=req.params.userId

         let userDeleted =await UserModel.findByIdAndDelete(userId)

        // let index= data.findIndex((eachobj)=>eachobj.id==userId)

        if(userDeleted){
            let userDeleted =data.splice(index,1)
            res.send(userDeleted)
        } 
        else{
            res.send("please give proper id bhai")
        }
        
    } catch (error) {
        res.status(404).send(error)
    }
 
}
 const userLogin= async(req,res)=>{
    const userEntry =req.body
    const userData =await UserModel.find({email:userEntry.email})
    if(userData.length>0){
        let databasePassword = userData[0].password;
        console.log(databasePassword)
    
        if(databasePassword == userEntry.password){

            console.log("process.env.JWT_SECRET_KEY",process.env.JWT_SECRET_KEY)
                //generate JWt token
        let token=jwt.sign({
            data: {
                id:userData[0]._id,
                name:userData[0].name,
                email:userData[0].email
            },
          }, 
          process.env.JWT_SECRET_KEY, 
          { expiresIn: 60 * 60 })
            res.send(token)
        }
        else{
            res.send("Invalid credentials")
        }
    }
    else{
        res.send("user does not exist")
    }
 }
    
module.exports={
    getAllUsers,
    getUserById,
    addNewUser,
    updateUserData,
    deleteUserData,
    userLogin

} 