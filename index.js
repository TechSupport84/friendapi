const express  =  require("express")
const app =  express()
const cors = require("cors")
const cookiePaser = require("cookie-parser")


//MIDDLE WARE
app.use(cors())
app.use(express.json())
app.use(cookiePaser())
const PORT = 3001
const db  =  require("./config/databas")







const authuser = require("./routes/auth.routes")
app.use("/auth", authuser)





app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    db.connect((err)=>{
        if(err) throw err
        console.log("Connected !",process.env.TOKEN)
        
    })
})



