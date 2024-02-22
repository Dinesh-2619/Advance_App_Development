import './nav.css';
import './home.css';
import { Link } from 'react-router-dom';
import Footer from './footer';
// import { CgProfile } from "react-icons/cg";
import Nav from './navbar';
import Carde from './Card';

function Home() {
  return (
    <div>
      <nav>
       <Nav/>
      </nav>

      <div className="container">
        <div className="content">
          <header>
            <h3 className='head'>WELCOME TO EDUADMIT_CONNECT</h3>
          </header>
          <div className="hero-content">
            <h2 className='top-hero'>APPLY FOR NEW ADMISSION</h2>
            <p className='para'>Start your journey towards a bright future!</p>
            <Link to={'/col'}><button className='btn-app'>GETS STARTED</button></Link>
            <Link to={'/course'}><button className='btn-app1'>VIEW COURSE</button></Link>
          </div>
        </div>
        <div className="image">
          <section className="hero">
            <div className="hero-image">
              <img src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?w=740&t=st=1708442678~exp=1708443278~hmac=d384ea32c456fd1f99cd8d5fbb086bbe497ab45a12bd4c8e411a7016f92d0fc9" alt="Students studying" />
            </div>
          </section>
        </div>
      </div>
      <div>
        <Carde/>
      </div>
      <footer>
        <Footer/>
      </footer>

      <div>
        <p className='reserve'>Copyright © 2024 EduAdmit_Connect and co. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Home;