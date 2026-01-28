// const Project = require("../models/project-model"); // path apne hisaab se sahi kar

const project = async (req, res) => {
  try {
   
   console.log(req.body);
   res.status(200).json({mssg:"working"})

  } catch (error) {
    console.log(error);
    
  }
};

module.exports = { project };
