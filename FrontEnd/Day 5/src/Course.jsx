import { Link } from 'react-router-dom';
import './course.css';
import Footer from './footer';
import Nav from './navbar';

const Courses = () => {
  return (
    <div>
      <nav>
        <Nav/>
      </nav>
      <center><h2 className='ug'>Under-Graduate Courses</h2></center>
      <div className="course-container">
        <div className="course-card">
          <div className="course-card-content">
            <Link to={'/form'} className='link'>B.Tech Information Technology</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> B.E Computer Science and Engineering</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'>B.E Mechanical Engineering</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> B.Tech Artificial Intelligence</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> B.E Mechatronics Engineering</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> B.E Civil Engineering</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> B.E Computer Science and design</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> Science and Humanities</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> B.E Computer Science and Engineering(Cyber Security)</Link>
          </div>
        </div>
      </div>
      <center><h2 className='pg'>Post-Graduate Courses</h2></center>
      <div className="course-container">
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> M.E Applied Electronics</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> M.E Computer Science and Engineering</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> Master of Business Administration</Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
          <Link to={'/form'} className='link'> M.E Engineer Design</Link>
          </div>
        </div>

      <div>
        <center><h1 className='as'>ARTS AND SCIENCE</h1></center>
      </div>


      <center><h2 className='pg1'>Under-Graduate Courses</h2></center>
      <div className="course-container1">
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> B.A English Literature</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>B.Sc Mathematics</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>B.Sc Electronics & Communication Systems</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>B.Sc Costume Design and Fashion</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>B.Sc Psychology</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> B.Sc Information Technology </Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> B.Sc Data Science</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>B.Com. Commerce with Computer Application</Link>
          </div>
        </div>
      </div>


      <center><h2 className='pg1'>Post-Graduate Courses</h2></center>
      <div className="course-container1">
        <div className="course-card1">
          <div className="course-card-content1">
         <Link to={'/form'} className='link'> M.A. English Literature</Link>
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>M.A Public Administration</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>M.A Public Administration</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> M.Sc Biotechnology</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> M.Sc Information Technology </Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> M.Sc Computer Technology </Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'> M.Com. International Business</Link>
          </div>
        </div>
        <div className="course-card1">
          <div className="course-card-content1">
          <Link to={'/form'} className='link'>M.Com. Commerce</Link>
          </div>
        </div>
      </div>

      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Courses;
