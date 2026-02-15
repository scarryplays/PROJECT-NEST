const deleteProject = async (req, res) => {
  try {
    const project = await projectSchema.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!project) {
      return res.status(404).json({ msg: "Project not found" });
    }

    res.json({ msg: "Project deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { deleteProject };
