import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Signin.css";
import Navbar from "./navbar";

function Register(){
  const navigate = useNavigate();
  const handleRegister  =() => {
    navigate("/");
  }
  return (
    <div>
    <nav>
        <Navbar/>
       </nav>
    <div className="login">
      <center>
        <div className="h21">Register</div></center>
      <form className="register-form" onSubmit={handleRegister}>
        <div className="input-container1">
          <label className="lab" htmlFor="name">Username</label>
          <input required type="text" className="lab1" id="name" placeholder="Enter Your Fullname" /></div>
        <div className="input-container1">
          <label className="lab" htmlFor="email">E-mail</label>
          <input className="lab1"  required type="email" placeholder="Enter your Email" id="email" name="email" /></div>
        <div className="input-container1">
          <label className="lab" htmlFor="password">Password</label>
          <input className="lab1"  required type="password" placeholder="Enter your password" id="password" name="password" /></div>
        <div className="input-container1">
          <label className="lab" htmlFor="phonenumber">Mobile Number</label>
          <input className="lab1" required type="phonenumber" placeholder="Enter your Moblie Number" id="number" name="number" /></div>
        <div className='button-container'>
          <button className="button2" type="submit" >Proceed</button></div>
      </form>
      <div className="register">
      <Link to={"/login"}><button className="link-btn1">Already have an account? Login here.</button></Link>
       {/* <button className="link-btn1">Already have an account? Login here.</button> */}
      </div>
    </div>
    </div>
  )
}

export default Register;