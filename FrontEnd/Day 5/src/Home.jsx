import './nav.css';
import './home.css';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Nav from './navbar';
import Carde from './Card';
import Silder from './sliderCard';

function Homes() {
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
              <img src="https://res.cloudinary.com/drnokmrib/image/upload/v1708611312/slid2_tneztm.jpg" alt="Students studying" />
            </div>
          </section>
        </div>
      </div>
      <div>
      <center><h1 className='ov'>INSTITUTIONS</h1></center>
        <Carde/>
      </div>
      <div>
        <center><h1 className='ov'>OVERVIEW</h1></center>
        <Silder/>
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

export default Homes;