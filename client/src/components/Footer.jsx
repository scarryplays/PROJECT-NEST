import "../style/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © By Kumar Anubhav {new Date().getFullYear()} ProjectNest • Built with MERN Stack
      </p>
    </footer>
  );
};


// gonna deploy this project on Azure and AWS