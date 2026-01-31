const Contact = require("../models/contact-model")



const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response)
        return res.status(200).json({mssg:"mssg send successfully"})
    } catch (error) {
        console.log(error);
        
    }
}


module.exports= contactForm;