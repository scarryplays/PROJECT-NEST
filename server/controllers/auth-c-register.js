const register = async(req, res)=>{
    try {
        res.status(200).send("welcome to PROJECT NEST register page");
    } catch (error) {
     console.log(error);
        
    }
}




module.exports = {register};