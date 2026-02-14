import "../style/about.css";

export const About = () => {
  return (
    <div className="about-container">

      <section className="about-hero">
        <h1>About ProjectNest</h1>
        <p>
          ProjectNest is a full-stack project management platform built to help
          developers organize, track, and manage their projects efficiently.
        </p>
      </section>

      <section className="about-content">

        <div className="about-card">
          <h2>🎯 Our Mission</h2>
          <p>
            To simplify project tracking and help developers stay organized
            with a clean, secure, and scalable dashboard system.
          </p>
        </div>

        <div className="about-card">
          <h2>⚙️ What It Offers</h2>
          <ul>
            <li>Secure JWT Authentication</li>
            <li>User-specific project dashboards</li>
            <li>Full CRUD functionality</li>
            <li>Status tracking system</li>
            <li>GitHub repository linking</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>🚀 Tech Stack</h2>
          <p>
            Built using React.js, Node.js, Express.js, MongoDB, and JWT
            authentication following a clean RESTful architecture.
          </p>
        </div>

      </section>

    </div>
  );
};
