const mongoose= require("mongoose")

const blogSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    userId:{type:mongoose.SchemaTypes.ObjectId,ref:"user"}
},{timestamps:true})

const BlogModel =mongoose.model("blog",blogSchema)
module.exports =BlogModel