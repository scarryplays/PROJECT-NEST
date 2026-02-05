import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import "../style/home.css";

export const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  return (
    <div className="hero-home">
      <div className="main-containar-home">
        <h1 className="home-heading">Manage Your Projects Smarter</h1>

        <p className="home-para">
          ProjectNest helps developers track, organize, and manage all their
          projects in one place.
        </p>

        <div className="hero-buttons">
          {!isLoggedIn && (
            <>
              <button
                onClick={() => navigate("/login")}
                className="home-btn1"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="home-btn2"
              >
                Get Started
              </button>
            </>
          )}

          {isLoggedIn && (
            <button
              onClick={() => navigate("/projectDashboard")}
              className="home-btn3"
            >
              Go to Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
