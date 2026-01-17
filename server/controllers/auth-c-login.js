const login = async(req, res)=>{
    try {
        console.log(req.body);
        
        res.status(200).send(req.body);
    } catch (error) {
     console.log(error);
        
    }
}




module.exports = {login};