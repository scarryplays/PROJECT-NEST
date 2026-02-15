import "../style/navbar.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sidebar ${open ? "open" : ""}`}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className="top-section"
        onMouseEnter={() => setOpen(true)}
      >
        <div className="logo-area">
          <NavLink to="/">
            <img className="main-logo" src={logo} alt="Logo" />
          </NavLink>
        </div>

        <div className="hamburger">☰</div>
      </div>

      <nav className="sidebar-menu">
        <ul>
          <li>
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
          </li>

          {isLoggedIn && (
            <li>
              <NavLink to="/projectDashboard" className="nav-link">
                Project Dashboard
              </NavLink>
            </li>
          )}

          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>

          {isLoggedIn ? (
            <li>
              <NavLink to="/logout" className="nav-link">
                Logout
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
