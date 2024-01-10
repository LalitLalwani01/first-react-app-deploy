const { trusted } = require("mongoose")
const BlogModel = require("../model/blogsModel")

const getAllBlogs= async(req,res)=>{
    try {
        let blogData =await BlogModel.find().populate("userId")

        // let blogData =await BlogModel.find()

        // let newData= await Promise.all(blogData.map(async(eachObj)=>{
        //     let data=await userModel.findById(eachObj.userId)

        //     // eachObj.userData= data
        //     return {...eachObj,userData:data}
        //   })
        // )
        // console.log(newData)
        res.send(blogData)
    } catch (error) {
        res.status(404).send(error)
    }
    
//     BlogModel.getAllBlogs('blogs').aggregate(
//         [
//           {
//             $lookup: {
//               from: 'users',
//               localField: '_id',
//               foreignField: 'userId',
//               as: 'userData'
//             }
//           },
//           { $match: { title: 'first-blog' } }
//         ],
//         { maxTimeMS: 60000, allowDiskUse: true }
//       );
}

const updatedBlog = async(req,res)=>{
  try {
    const userId =req.params.userId
    const userData =req.body
  
    let updateBlog = await BlogModel.findByIdAndUpdate(userId,userData)
    if(updateBlog){
      res.send(updateBlog)
      console.log(res)
    }
    else{
      res.send("Please enter proper id")
    }
    
  } catch (error) {
    res.status(404).send(error)
  }
}


// updateBlog.save()




const addBlog =async(req,res)=>{
    const postData =req.body
    console.log(postData)


const newBlog= new BlogModel({
    title:postData.title,
    description:postData.description,
    userId:postData.userId
})
await newBlog.save()
res.send(newBlog)
}
module.exports={getAllBlogs,addBlog,updatedBlog}