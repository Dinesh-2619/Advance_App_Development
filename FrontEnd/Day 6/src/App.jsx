import './assets/css/App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Signup';
import Form from './components/AdForm';
import Col from './components/Colleges';
import Courses from './components/Course';
import Homes from './components/Home';
import Profile from './components/StuProfile';
import AdminProfilePage from './components/AdminProfile';
import FAQPage from './components/faq';
import Labels from './components/Label';
import LoginUi from './components/AdminLogin';
import AdminSignup from './components/AdminRegister';
import AdminDashboard from './components/AdminHome';
import Admindetails from './components/AdminProfile';
import Userman from './components/UM';
import Coursedet from './components/CM';
import Appman from './components/AM';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/col" exact element={<Col/>} />
          <Route path="/" exact element={<Homes/>} />
          <Route path="/form" exact element={<Form/>} />
          <Route path="/course" exact element={<Courses/>} />
          <Route path="/adminp" exact element={<AdminProfilePage/>} />
          <Route path="/Profile" exact element={<Profile/>} />
          <Route path="/Faq" exact element={<FAQPage/>} />
          <Route path="/choice" exact element={<Labels/>} />
           <Route path="/adlog" exact element={<LoginUi/>} />
           <Route path="/adReg" exact element={<AdminSignup/>} />
           <Route path="/ad-db" exact element={<AdminDashboard/>} />
           <Route path="/adprof" exact element={<Admindetails/>} />
           <Route path="/users" exact element={<Userman/>} />
           <Route path="/courseMan" exact element={<Coursedet/>} />
           <Route path="/appMan" exact element={<Appman/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
