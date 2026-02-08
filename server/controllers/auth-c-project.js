const { projectSchema } = require("../models/saveproject-model");

const project = async (req, res) => {
  try {
    const { projectName, description, techStack, currentStatus, gitHubLink } = req.body;

    if (!projectName || !description || !techStack || !gitHubLink) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newProject = await projectSchema.create({
      projectName,
      description,
      techStack,
      currentStatus,
      gitHubLink,
      userId: req.user._id, // Assuming you have user authentication and want to associate the project with a user
    });

    res.status(201).json({
      msg: "Project saved successfully",
      project: newProject,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};
const getUserProjects = async (req, res) => {
  try {

    const projects = await projectSchema.find({
      userId: req.user._id  
    });

    res.status(200).json(projects);

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};
// FOR COMMIt

module.exports = { project, getUserProjects };
