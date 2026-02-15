const {projectSchema} = require("../models/saveproject-model");


const updateProject = async (req, res) => {
  try {
    const project = await projectSchema.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!project) {
      return res.status(404).json({ msg: "Project not found or not authorized" });
    }

    if (req.body.techStack && typeof req.body.techStack === "string") {
      req.body.techStack = req.body.techStack
        .split(",")
        .map(t => t.trim())
        .filter(Boolean);
    }

    Object.assign(project, req.body);
    await project.save();

    res.json({ msg: "Project updated", project });

  } catch (error) {
    console.log("UPDATE ERROR:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { updateProject };
