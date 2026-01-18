const {User}=require("../models/user-model")
const bcrypt = require("bcryptjs")




const register = async(req, res)=>{
    try {
     
        // console.log(req.body);
        const {name, username, email, phone,password}=req.body;
        const userExist = await User.findOne({email})
        if (userExist) {
            return  res.status(401).json({message:"user is already exist"})
     
        }
        //   hash the pass
        // const saltRound= 10
        // const hash_password = await bcrypt.hash(password,saltRound)



        const userCreated = await User.create({name, username, email, phone,password})
        
        res.status(200).send({
            msg : userCreated,
            token:await userCreated.generateToken(),
            userID:userCreated._id.toString(),
        });
    } catch (error) {
     console.log(error);
        
    }
}




module.exports = {register};