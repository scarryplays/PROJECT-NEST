import "../style/login.css"



export const Login =()=>{
  return (
    <div className="login-container">
      <div class="login-card">
    <h2 className="login-heading">Welcome Back</h2>

    <form className="login-form">
      {/* <input type="text" placeholder="Full Name" required /> */}
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      {/* <input type="password" placeholder="Confirm Password" required /> */}
    </form>
 <button>Submit</button>

    <p className="login-para">Don't have an account? <a href="/register">Register</a></p>
  </div>
    </div>
  );
}