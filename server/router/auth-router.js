const express = require("express")
const router = express.Router()


router.get("/", (req, res)=>{
        res.status(200).send("Welcome to home page")
})


router.get("/anotherpage", (req, res)=>{
        res.status(200).send("Welcome to another page")
})




module.exports = router;