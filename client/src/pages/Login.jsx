import "../style/login.css"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth";



export const Login =()=>{

    const [user,setUser]=useState({
        email:"",
        password:"",
    })

    const navigate = useNavigate()
     const {storeTokenInls} = useAuth()

const handleInput = (e)=>{
console.log(e);
let name =  e.target.name;
let value = e.target.value


setUser({
    ...user,
    [name]:value
})
}


const handleSubmit =async (e)=>{
    e.preventDefault();
    // alert(user);
    // console.log(user);
   try {
     const response = await fetch(`http://localhost:5000/api/auth/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user),

    })
    if(response.ok){

  const res_data = await response.json();
     console.log("token aagaya ooye", res_data)
     storeTokenInls(res_data.token)
    // localStorage.setItem("token",res_data.token)







      setUser({ 
    email:"",
    password:""})
    alert("login successful")
    // navigate("/login")
    navigate("/")
    }else{
      alert("invalid credential")
    }
     console.log(response);
   } catch (error) {
    console.log("CONNECTION FAIL",error);
    
   }
  
    
}

















  return (
    <div className="login-container">
      <div class="login-card">
    <h2 className="login-heading">Welcome Back</h2>

    <form onSubmit={handleSubmit} className="login-form">
      {/* <input type="text" placeholder="Full Name" required /> */}
     <input className="login-input2" type="email" name="email" placeholder="email" id="email"  autoComplete="off" value={user.email} onChange={handleInput}  required />
      {/* <input type="number" name="phone" placeholder="phone" id="phone"  autoComplete="off" value={user.phone} onChange={handleInput} required /> */}
      <input className="login-input2" type="password" name="password" placeholder="password" id="password"  autoComplete="off" value={user.password} onChange={handleInput} required />
      {/* <input type="password" placeholder="Confirm Password" required /> */}
       {/* <br /> */}
    <button type="submit" className="login-btn">Login</button>
    </form>


    <p className="login-para">Don't have an account? <a href="/register">Register</a></p>
  </div>
    </div>
  );
}