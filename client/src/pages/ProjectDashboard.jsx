import { useState } from "react";
import "../style/projectdashboard.css";

export const ProjectDashboard = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    techStack: "",
    currentStatus: "planning",
    gitHubLink: "",
  });

  const [projects, setProjects] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      techStack: formData.techStack
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    try {
      const res = await fetch("http://localhost:5000/api/auth/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg || "Error");
        return;
      }

      setProjects((prev) => [...prev, data.project]);

      setFormData({
        projectName: "",
        description: "",
        techStack: "",
        currentStatus: "planning",
        gitHubLink: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <h1 className="dashboard-title">Project Dashboard</h1>

      <form className="project-form" onSubmit={handleSubmit}>
        <input
          name="projectName"
          placeholder="Project Name"
          value={formData.projectName}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          name="techStack"
          placeholder="Tech Stack (React, Node)"
          value={formData.techStack}
          onChange={handleChange}
          required
        />

        <select
          name="currentStatus"
          value={formData.currentStatus}
          onChange={handleChange}
        >
          <option value="planning">Planning</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="on-hold">On Hold</option>
        </select>

        <input
          name="gitHubLink"
          placeholder="GitHub Repo Link"
          value={formData.gitHubLink}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Project</button>
      </form>

      <section className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h3>{project.projectName}</h3>
            <p><strong>Status:</strong> {project.currentStatus}</p>
            <p><strong>Tech:</strong> {project.techStack.join(", ")}</p>
            <p>{project.description}</p>
            <a href={project.gitHubLink} target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};
