// import "../style/home.css"


// export const Home =()=>{
//     return(
//     <div className="header-home"><h1>hello home page</h1></div>)

// }
import { useNavigate } from "react-router-dom";
// import "./home.css";
import "../style/home.css"

export const Home = () => {

const navigate= useNavigate();









  return (
  <>


      <div className="hero-home">
      <div className="main-containar-home">
        <h1 className="home-heading">Manage Your Projects Smarter</h1>
        <p className="home-para">
          ProjectNest helps developers track, organize, and manage all their
          projects in one place.
        </p>

        <div className="hero-buttons">
          {/* <Link to="/login" className="btn primary">Login</Link>
          <Link to="/register" className="btn secondary">Get Started</Link> */}
          <button onClick={navigate("/login")} className="home-btn1">Login</button>
          <button onClick={navigate("/register")} className="home-btn2">Get Started</button>



        </div>
        </div>
      </div>

   
    </>
  );
};