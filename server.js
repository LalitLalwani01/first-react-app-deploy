const bodyParser = require("body-parser")
const express =require("express")
const app =express()
const mongoose =require("mongoose")
require('dotenv').config()
const userRoutes =require("./routes/userRoutes")
const blogRoutes =require("./routes/blogRoutes")
const dashboardRoutes=require("./routes/dashboard")
const authorizationCheck = require("./middlewares/auth")
const isAdmin = require("./middlewares/isAdmin")
const roleGuard =require("./middlewares/roleGuard")
const morgan =require("morgan")

app.use(bodyParser.json())
const port =5000



 app.use(morgan("combined"))
app.use("/blog",blogRoutes)
app.use("/user",userRoutes)

// app.get("/user",(req,res)=>{
//     try{
//         let data=req.query
//         let color =data.color1
//         console.log("The data",color)
//         res.send(`The color is ${color}`)
//     }
//     catch{
//         res.send("sorry")
//     }
//     // res.send("These are my user")
// })

mongoose.connect("mongodb://127.0.0.1:27017/node-v2").then((data,err)=>{
    if(data){
        console.log("connected successfully")
    }
    else{
        console.log(err)
    }
})


app.use("/dashboard",authorizationCheck,dashboardRoutes)
app.use("/isAdmin",authorizationCheck,roleGuard)


app.listen(port,()=>{
    console.log("Your app is running at"+ port)
})