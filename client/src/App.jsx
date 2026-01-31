import{BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"; 
 import { About } from "./pages/About";
 import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;