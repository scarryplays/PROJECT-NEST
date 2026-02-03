import "../style/navbar.css"
import logo from "../assets/logo.png";



export const Navbar = ()=>{
    return (
        <>
            <header className="sidebar">
  <div className="logo-area">
    <a href="/">
      <img className="main-logo" src={logo} alt="Logo" />
    </a>
  </div>

  <nav className="sidebar-menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/projectDashboard">Project Dashboard</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
    </ul>
  </nav>
</header>

        </>
    )
}