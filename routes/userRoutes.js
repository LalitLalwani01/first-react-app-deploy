const express =require("express")
const {
    getAllUsers,
    getUserById,
    addNewUser,
    updateUserData,
    deleteUserData,
    userLogin
}=require("../controller/usercontroller")

const router=express.Router()

router.get("/",getAllUsers)
router.get("/:userId",getUserById)
router.post("/addNewUser",addNewUser)
router.post("/userLogin",userLogin)
router.put("/:userId",updateUserData)
router.delete("/:userId",deleteUserData)

module.exports =router;