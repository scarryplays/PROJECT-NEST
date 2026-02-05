import{BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"; 
 import { About } from "./pages/About";
 import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Register } from "./pages/Register";
import { ProjectDashboard } from "./pages/ProjectDashboard";
import { Service } from "./pages/Service";
// import {bkgvideo} from "./assets/bkgvideo";
import {VideoBackground} from "../src/components/BgVideo"
import { Navbar } from "./components/Navbar";





 const App = ()=>{
  return <>

   {/* <video autoPlay muted loop id="bg-video">
        <source src={bkgvideo} type="video/mp4" />
      </video> */}
      <VideoBackground/>
      <Navbar/>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projectDashboard" element={<ProjectDashboard />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>

  </>
}

export default App;