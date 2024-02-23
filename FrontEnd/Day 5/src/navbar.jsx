import { Link } from 'react-router-dom'; // Import Link from React Router
import './nav.css';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/col">Colleges</Link></li>
        <li className="nav-item"><Link to="/course">Explore</Link></li>
        <li className="nav-item dropdown">
              <CgProfile className="icon2" size={22}/>
          <ul className="dropdown-menu">
            <li><Link to="/adminp">Admin</Link></li>
            <li><Link to="/Profile">Student</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;