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
// FOR COMMIt

module.exports = { project };
