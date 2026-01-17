const {User}=require("../models/user-model")




const register = async(req, res)=>{
    try {
     
        // console.log(req.body);
        const {name, username, email, phone,password}=req.body;
        const userExist = await User.findOne({email})
        if (userExist) {
            return  res.status(401).json({message:"user is already exist"})
     
        }
        await User.create({name, username, email, phone,password})
        
        res.status(200).send({message :req.body});
    } catch (error) {
     console.log(error);
        
    }
}




module.exports = {register};