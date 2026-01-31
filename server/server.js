require('dotenv').config()
const express = require("express")
const app = express()
const router = require("./router/auth-router")
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db")



app.use(express.json());
app.use("/api/auth",router)
app.use("/api/auth",contactRoute)
// app.use(express.json());





const PORT =5000;

connectDb().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`server runnin at ${PORT}`);
    
})
})
// app.listen(PORT, ()=>{
//     console.log(`server runnin at ${PORT}`);
    
// })