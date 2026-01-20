const {User}=require("../models/user-model")
const bcrypt = require("bcryptjs")





const login = async(req, res)=>{
    try {
        // console.log(req.body);
        const {email,password}= req.body;
        const userExist = await User.findOne({
            email
        })
        
           if(!userExist){
            return res.status(400).json({mssg:"Invalid Creadential"})
           }


           const user = await bcrypt.compare(password,userExist.password)

if(user){
  res.status(200).json({
            msg : "login succesful",
            token:await userExist.generateToken(),
            userID:userExist._id.toString(),
        });
}else{
    res.status(401).json({mssg:"Invalid Email or password"})
}

// error
    
    } catch (error) {
        res.status(500).send({Mssg:"INTERNAL SREVER ERROR"});
     console.log(error);
        
    }
}




module.exports = {login};