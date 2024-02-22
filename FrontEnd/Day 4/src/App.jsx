// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Login from './Login';
import Register from './Signup';
import Home from './Home';
import Form from './AdForm';
import Col from './Colleges';
import Courses from './Course';
function App() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/col" exact element={<Col/>} />
          <Route path="/home" exact element={<Home/>} />
          <Route path="/form" exact element={<Form/>} />
          <Route path="/course" exact element={<Courses/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App;
