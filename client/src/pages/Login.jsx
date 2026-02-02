import "../style/login.css"
import { useState } from "react"



export const Login =()=>{

    const [user,setUser]=useState({
        email:"",
        password:"",
    })

const handleInput = (e)=>{
console.log(e);
let name =  e.target.name;
let value = e.target.value


setUser({
    ...user,
    [name]:value
})
}


const handleSubmit = (e)=>{
    e.preventDefault();
    alert(user);
    console.log(user);
    
}

















  return (
    <div className="login-container">
      <div class="login-card">
    <h2 className="login-heading">Welcome Back</h2>

    <form onSubmit={handleSubmit} className="login-form">
      {/* <input type="text" placeholder="Full Name" required /> */}
     <input className="login-input1" type="email" name="email" placeholder="email" id="email"  autoComplete="off" value={user.email} onChange={handleInput}  required />
      {/* <input type="number" name="phone" placeholder="phone" id="phone"  autoComplete="off" value={user.phone} onChange={handleInput} required /> */}
      <input className="login-input2" type="password" name="password" placeholder="password" id="password"  autoComplete="off" value={user.password} onChange={handleInput} required />
      {/* <input type="password" placeholder="Confirm Password" required /> */}
       {/* <br /> */}
    <button type="submit" className="login-btn">Register</button>
    </form>


    <p className="login-para">Don't have an account? <a href="/register">Register</a></p>
  </div>
    </div>
  );
}