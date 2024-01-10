const jwt = require('jsonwebtoken');
const authorizationCheck =async(req,res,next)=>{
    let token =req.headers.authorization
    console.log(token)

    //verify a token symmetric
   await jwt.verify(token, process.env.JWT_SECRET_KEY, function(err, decoded) {
        if(err){
            res.send("not authorized")
        }  
        let userId =decoded.data._id;
        console.log(userId)   
        req.userId =userId
        next()
        
        
      });
      

    // if(token==""){
    //     // next()
    //     // console.log("This is your dashboard")

}
module.exports=authorizationCheck