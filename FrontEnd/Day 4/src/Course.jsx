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
            B.Tech Information Technology
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card">
          <div className="course-card-content">
            B.E Computer Science and Engineering
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.E Mechanical Engineering
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.Tech Artificial Intelligence
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.E Mechatronics Engineering
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.E Civil Engineering
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.E Computer Science and design
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            Science and Humanities
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            B.E Computer Science and Engineering(Cyber Security)
          </div>
        </div>
      </div>
      <center><h2 className='pg'>Post-Graduate Courses</h2></center>
      <div className="course-container">
        <div className="course-card">
          <div className="course-card-content">
            M.E Applied Electronics
          </div>
        </div>
        {/* Repeat the above div block for each degree card, changing the content as necessary */}
        <div className="course-card">
          <div className="course-card-content">
            M.E Computer Science and Engineering
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            Master of Business Administration
          </div>
        </div>
        <div className="course-card">
          <div className="course-card-content">
            M.E Engineer Design
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
