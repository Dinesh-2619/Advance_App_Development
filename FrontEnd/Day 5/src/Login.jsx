
import { Link } from "react-router-dom";
import "./LoginForm.css";
import Nav from "./navbar";
function Login() {
  return (
    <div>
   <nav>
       <Nav/>
      </nav>

    
    <div className="auth-form-container1">
      <center><div className="l1">Login</div></center>
      <form className="login-form">
        <label required className="em" htmlFor="email">Email</label>
        <br />
        <input className="i1" required type="email" placeholder="Enter your gmail" id="email" name="email" />
        <br />
        <label className="pa" htmlFor="password">Password</label>
        <br />
        <input className="i1" required type="password" placeholder="Enter your password" id="password" name="password" /><br />
        <Link to={"/home"}><button className="button1" type="submit" >Log In</button></Link>
      </form>
      <Link to={"/register"}><button className="link-btn1">Donot have an account? Register here.</button></Link>
      {/* <button className="link-btn1">Donot have an account? Register here.</button> */}
    </div>
    </div>
  )
}

export default Login;