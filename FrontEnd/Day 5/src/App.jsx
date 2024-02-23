import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Login from './Login';
import Register from './Signup';
import Form from './AdForm';
import Col from './Colleges';
import Courses from './Course';
import Homes from './Home';
import Profile from './StuProfile';
import AdminProfilePage from './AdminProfile';
import FAQPage from './Faq';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/col" exact element={<Col/>} />
          <Route path="/home" exact element={<Homes/>} />
          <Route path="/form" exact element={<Form/>} />
          <Route path="/course" exact element={<Courses/>} />
          <Route path="/adminp" exact element={<AdminProfilePage/>} />
          
          <Route path="/Profile" exact element={<Profile/>} />
          <Route path="/Faq" exact element={<FAQPage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
