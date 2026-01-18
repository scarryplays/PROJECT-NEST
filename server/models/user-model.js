const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});


// for hash the pass
userSchema.pre('save',async function() {
    // console.log("prefuck",this);
    const user = this;
    if(!user.isModified("password")){
      next();
    }

    try {
        const saltRound= await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltRound)
        user.password= hash_password
    } catch (error) {
             next(error);
    }
})




// for JWT

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userID: this._id.toString(),
            email: this.email,
            isAdmin:this.isAdmin,

        },
        process.env.JWT_KEY,
        {
            expiresIn:"10d"
        }
    )
    } catch (error) {
        console.log(error);
        
    }
}





const User = new mongoose.model("USER", userSchema);
module.exports={User}