import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
    return (
<div>
<nav>
<ul>
  <li className="hideOnMobile"><a href="/home">Home</a></li>
  <li className="hideOnMobile"><a href="#">About</a></li>
  <li className="hideOnMobile"><a href="#">Explore</a></li>
  <div className="icons-btn" onClick={toggleDropdown}>
              <CgProfile className="icon2" />
  </div>
</ul>
</nav>
{isOpen && (
             <div className="dropdown">
                <ul >
                  <li>
                    <Link to="/Login">Profile</Link>
                  </li>
                  <li>
                    <Link to="/Login">Settings</Link>
                  </li>
                  <li>
                    <Link to="/Login">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
</div>
    )
}
export default Nav;