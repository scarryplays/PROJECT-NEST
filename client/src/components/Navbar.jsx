import "../style/navbar.css";
import logo from "../assets/logo.png";
import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="sidebar">
      <div className="logo-area">
        <NavLink to="/">
          <img className="main-logo" src={logo} alt="Logo" />
        </NavLink>
      </div>

      <nav className="sidebar-menu">
        <ul>
          <li>
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/projectDashboard" className="nav-link">
              Project Dashboard
            </NavLink>
          </li>

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
              <NavLink to="/logout" className="nav-link logout">
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