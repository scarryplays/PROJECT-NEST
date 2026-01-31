import "../style/register.css"


export const Register =()=>{
    return (
    <div className="register-container">
      <div class="register-card">
    <h2>Create Account</h2>

    <form>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />

      {/* <button type="submit">Register</button> */}
    </form>
    <button type="submit">Register</button>

    <p>Don't have an account? <a href="/login">Login</a></p>
  </div>
    </div>
  );

}