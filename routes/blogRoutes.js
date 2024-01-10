const express = require("express")
const { model } = require("mongoose")
const blogController = require("../controller/blogController")
const router = express.Router()


//blog
router.get("/",blogController.getAllBlogs)
router.post("/addBlog",blogController.addBlog)
router.put("/:userId",blogController.updatedBlog)

module.exports =router
