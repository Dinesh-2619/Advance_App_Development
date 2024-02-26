
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/LoginForm.css";
import Nav from "./navbar";
function Login() {
  const navigate = useNavigate();
  const handleLogin =() => {
    navigate("/home");
  }
  return (
    <div>
   <nav>
       <Nav/>
      </nav>

    
    <div className="auth-form-container1">
      {/* <center><div className="l1">Login</div></center> */}
      <form className="login-form" onSubmit={handleLogin}>
      <center><div className="l1">Login</div></center>
        <label required className="em" htmlFor="email">Email</label>
        <br />
        <input className="i1" required type="email" placeholder="Enter your gmail" id="email" name="email" />
        <br />
        <label className="pa" htmlFor="password">Password</label>
        <br />
        <input className="i1" required type="password" placeholder="Enter your password" id="password" name="password" /><br />
        <button className="button1" type="submit" >Log In</button><br/>
        <Link to={"/register"}><button className="link-btn1">Donot have an account? Register here.</button></Link>
      </form>
      {/* <Link to={"/register"}><button className="link-btn1">Donot have an account? Register here.</button></Link> */}
      {/*<button className="link-btn1">Donot have an account? Register here.</button> */}
    </div>
    </div>
  )
}

export default Login;