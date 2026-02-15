const updateProject = async (req, res) => {
  try {
    const project = await projectSchema.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });
  console.log("1st",req.user);
  
    console.log("2nd",req.params.id);
    

if (req.body.techStack && typeof req.body.techStack === "string") {
  req.body.techStack = req.body.techStack
    .split(",")
    .map(t => t.trim())
    .filter(Boolean);
} 
    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    Object.assign(project, req.body);
    await project.save();

    res.json({ msg: "Project updated", project });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};
module.exports = { updateProject };
