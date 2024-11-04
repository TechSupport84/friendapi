const express = require("express")
const {register, userLogin, userLogout} = require("../controllers/authcontrollers")
const router  = express.Router()



router.post("/register",register);


router.post("/login",userLogin)

router.post("/logout",userLogout)














module.exports = router