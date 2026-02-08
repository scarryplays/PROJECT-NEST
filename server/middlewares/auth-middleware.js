const jwt = require("jsonwebtoken");
// const User = require("../models/auth-model");
const {User} = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    } 

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(decoded.userID);
     req.user = user; 
    //  console.log("TOKEN:", token);
    next();
    } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = {authMiddleware};