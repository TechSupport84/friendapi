const db = require("../config/databas")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const  register =(req,  res) =>{
    const q= "SELECT *  FROM  users WHERE username = ? OR email = ?";
    db.query(q, [req.body.username, req.body.email], (err,data)=>{
        if (err)  return res.status(500).json(err)
        if(req.body.email) return res.status(500).json({message:"Email  already  exist "})
        if(req.body.username) return res.status(500).json({message:"Username already  exist  choose an  other one ."})
        if(data.length)return res.status(409).json("User already exist")

        //create a new user.
        const hasspassword = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password,hasspassword)
       
        const q= "INSERT INTO  users (`username`,`email`,`password`,`tel`,`dob`)VALUES(?)";
        const values = [req.body.username,req.body.email, hashedPassword, req.body.tel, req.body.dob]
        db.query(q, [values],(err, data) =>{
            if(err) return res.status(500).json(err)
            
                return res.status(200).json({message:"User  Created !"})
               
        })
        
    })


}

const userLogin = (req, res) =>{
    const q  = "SELECT * FROM  users WHERE username = ? OR email = ? "
    db.query(q, [req.body.username, req.body.email],(err, data)=>{
        if(err) return res.status(500).json(err)
        if(data.length === 0 ) return res.status(404).json({message:"Username no found !"})
        if(data.length >0)
        {
            const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

            if(!checkPassword) {
            return res.status(400).json({message:"Wrong password try  again."})
            }else{

            const {password, ...others} = data[0];

            const token = jwt.sign({id:data[0].id},"jeancy")

            res.cookie("accessToken", token,{
                httpOnly :true
            }).status(200).json(others)


            }
   
        }

    })
}



const userLogout = (req, res) =>{
    res.clearCookie("accessToken",{
        secure: true,
        sameSite: "none"
    }).status(200).json({message:"User has been logged out."})
}







module.exports = {
    register,
    userLogin,
    userLogout

}