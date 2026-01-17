const mongoose = require("mongoose")

// const URI = "mongodb://127.0.0.1:27017/og_guide";

// mongoose.connect(URI);
  // const URI = 
 
    //  const URI = "mongodb+srv://anubhavkumar9654070617:anubhav7011@cluster0.hzymyeg.mongodb.net/project_nest?retryWrites=true&w=majority&appName=Cluster0"
     const URI =process.env.MONGODB_URI
     
const connectDb = async () => {
    try {
     await  mongoose.connect(URI);
      console.log("connection successfull to database");
      

    } catch (error) {
        console.error("database connection failed")
        process.exit(0)
    }
}

module.exports = connectDb;