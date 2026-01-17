// HOME PAGE
const home = async(req, res)=>{
    try {
        res.status(200).send("welcome to PROJECT NEST");
    } catch (error) {
     console.log(error);
        
    }
}




module.exports = {home};