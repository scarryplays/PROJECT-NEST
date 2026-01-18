const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")


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
    console.log("prefuck",this);
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


const User = new mongoose.model("USER", userSchema);
module.exports={User}