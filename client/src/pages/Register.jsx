import { useState } from "react";
import "../style/register.css"
import {useNavigate} from "react-router-dom"


export const Register =()=>{
const [user,setUser]=useState({
    name:"",
    username:"",
    email:"",
    phone:"",
    password:""
})
    const navigate = useNavigate()
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
     const response = await fetch(`http://localhost:5000/api/auth/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user),

    })
    if(response.ok){
      setUser({  name:"",
    username:"",
    email:"",
    phone:"",
    password:""})
    alert("registeration successful")
    // navigate("/login")
    navigate("/login")
    }
     console.log(response);
   } catch (error) {
    console.log("CONNECTION FAIL",error);
    
   }
  
    
}






    return (
    <div className="register-container">
      <div className="register-card">
    <h2 className="register-heading">Create Account</h2>

    <form onSubmit={handleSubmit} className="register-form">
      <input className="register-input2" type="text" name="name" placeholder="Name" id="name" autoComplete="off" value={user.name} onChange={handleInput} required />
      <input className="register-input2" type="text" name="username" placeholder="Username" id="username" autoComplete="off" value={user.username} onChange={handleInput}  required />
      <input className="register-input2" type="email" name="email" placeholder="Email" id="email"  autoComplete="off" value={user.email} onChange={handleInput}  required />
      <input  className="register-input2" type="number" name="phone" placeholder="Phone" id="phone"  autoComplete="off" value={user.phone} onChange={handleInput} required />
      <input className="register-input2" type="password" name="password" placeholder="Password" id="password"  autoComplete="off" value={user.password} onChange={handleInput} required />
      {/* <input type="password" placeholder="Confirm Password" required /> */}

      {/* <button type="submit">Register</button> */}
       {/* <br /> */}
    <button type="submit" className="register-btn">Register</button>
    </form>
    

    <p className="register-para">Don't have an account? <a href="/login">Login</a></p>
  </div>
    </div>
  );

}