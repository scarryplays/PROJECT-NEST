import { useState, useEffect } from "react";
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
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch("/api/auth/projects", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const data = await res.json();
    setProjects(data);
  };

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

    const url = editId
      ? `/api/auth/projects/${editId}`
      : "/api/auth/projects";

    const method = editId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) return;

    setFormData({
      projectName: "",
      description: "",
      techStack: "",
      currentStatus: "planning",
      gitHubLink: "",
    });

    setEditId(null);
    fetchProjects();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/auth/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    fetchProjects();
  };

  const handleEdit = (project) => {
    setEditId(project._id);
    setFormData({
      projectName: project.projectName,
      description: project.description,
      techStack: project.techStack.join(", "),
      currentStatus: project.currentStatus,
      gitHubLink: project.gitHubLink,
    });
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

        <button type="submit">
          {editId ? "Update Project" : "Add Project"}
        </button>
      </form>

      <section className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <div>
              <h3>{project.projectName}</h3>
              <span className={`status-${project.currentStatus}`}>
                {project.currentStatus}
              </span>
            </div>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <button onClick={() => handleEdit(project)}>Edit</button>
              <button onClick={() => handleDelete(project._id)}>
                Delete
              </button>
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
