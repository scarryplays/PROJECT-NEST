const mongoose = require("mongoose");

const saveProjectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    techStack: {
      type: [String], 
      required: true,
    },

    currentStatus: {
      type: String,
      enum: ["planning", "in-progress", "completed", "on-hold"],
      default: "planning",
    },

    gitHubLink: {
      type: String,
      required: true,
      trim: true,
    },
       userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }


);



const projectSchema = new mongoose.model("Project", saveProjectSchema);
module.exports={projectSchema}

// module.exports = mongoose.model("Project", saveProjectSchema);
