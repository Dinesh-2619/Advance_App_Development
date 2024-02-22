// import './form.css';
// import { useState } from 'react';

// function Form() {

//   const [formData, setFormData] = useState({
//     username: 'default',
//     email: 'default@gmail.com',
//     occupation: 'student',
//     gender: 'male',
//     languages: ['html'],
//   })

//   const onChangeHandler = (event) => {

//     console.log(event)
//     if (event.target.name === 'languages') {

//       let copy = { ...formData }

//       if (event.target.checked) {
//         copy.languages.push(event.target.value)
//       } else {
//         copy.languages = copy.languages.filter(el => el !== event.target.value)
//       }

//       setFormData(copy)

//     } else {
//       setFormData(() => ({
//         ...formData,
//         [event.target.name]: event.target.value
//       }))
//     }
//   }

//   const onSubmitHandler = (event) => {
//     event.preventDefault()
//     console.log(formData)
//   }
//   return (
//     <div className="App">
//       <form onSubmit={onSubmitHandler}>
//         <center><h1>ADMISSION FORM</h1></center>
//         <div className="form-group">
//           <label htmlFor="username" className="form-label">User Name</label>
//           <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="occupation" className="form-label">Occupation</label>
//           <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
//             <option value="student">Student</option>
//             <option value="employee">Employee</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender" className="form-label">Gender</label>
//           <div>
            
//             <div>
//               <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
//               <label htmlFor="male">Male</label>
//             </div>
//             <div>
//               <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
//               <label htmlFor="female">Female</label>
//             </div>
//             <div>
//               <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
//               <label htmlFor="other">Other</label>
//             </div>
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender" className="form-label">Languages</label>
//           <div>
//             <div>
//               <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
//               <label htmlFor="html">HTML</label>
//             </div>
//             <div>
//               <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
//               <label htmlFor="css">CSS</label>
//             </div>
//             <div>
//               <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
//               <label htmlFor="javascript">Javascript</label>
//             </div>
//           </div>
//         </div>
//         <div className="form-group">
//           <button className="btn" type="submit" >Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Form;


// import React from 'react';
// import './form.css'; // Assuming your CSS is in this file

// const RegistrationForm = () => {
//   return (
//     <div className="registration-form">
//       <h1>Registration</h1>
//       <h2>Personal Details</h2>
//       <div className="form-group">
//         <label>Full Name</label>
//         <input required type="text" placeholder="Enter your full name" />
//         <label>Date of Birth</label>
//         <input required type="date" />
//         <label>Email</label>
//         <input required type="email" placeholder="Enter your email" />
//       </div>
//       <div className="form-group">
//         <label>Mobile Number</label>
//         <input required type="tel" placeholder="Enter mobile number" />
//         <label>Gender</label>
//         <input required type="text" placeholder="Enter your gender" />
//         <label>Occupation</label>
//         <input required type="text" placeholder="Enter your occupation" />
//       </div>
//       <h2>Identity Details</h2>
//       <div className="form-group">
//         <label>ID Type</label>
//         <input required type="text" placeholder="Enter ID type" />
//         <label>ID Number</label>
//         <input required type="text" placeholder="Enter ID number" />
//         <label>Issue Authority</label>
//         <input required type="text" placeholder="Enter issue department" />
//       </div>
//       <div className="form-group">
//         <label>Issued State</label>
//         <input required type="text" placeholder="Enter issued state" />
//         <label>Issued Date</label>
//         <input required type="date" />
//         <label>Expiry Date</label>
//         <input required type="date" />
//       </div>
//       <button type="submit">Next</button>
//     </div>
//   );
// }

// export default RegistrationForm;




import './form.css'; // Assuming your CSS is in this file
import Footer from './footer';
import Nav from './navbar';
const RegistrationForm = () => {
  return (
    <div>
      <nav>
       <Nav/>
      </nav>
      <form className="registration-form" onSubmit={handleSubmit}>
        <center><h1 className='for'>ADMISSION FORM</h1></center>
      <div className='get-done'>
        <div className="form-container">
          <div className="personal-details">
            <h2>Personal Details</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input required id="fullName" type="text" placeholder="Enter your full name" />
              <label htmlFor="dob">Date of Birth</label>
              <input required id="dob" type="date" />
              <label htmlFor="email">Email</label>
              <input required id="email" type="email" placeholder="Enter your email" />
              <label htmlFor="mobile">Mobile Number</label>
              <input required id="mobile" type="tel" placeholder="Enter mobile number" />
              <label htmlFor="gender">Gender</label>
              <input required id="gender" type="text" placeholder="Enter your gender" />
              <label htmlFor="occupation">Occupation</label>
              <input required id="occupation" type="text" placeholder="Enter your occupation" />
            </div>
          </div>
          <div className="identity-details">
            <h2>Identity Details</h2>
            <div className="form-group">
              <label htmlFor="idType">ID Type</label>
              <input required id="idType" type="text" placeholder="Enter ID type" />
              <label htmlFor="idNumber">ID Number</label>
              <input required id="idNumber" type="text" placeholder="Enter ID number" />
              <label htmlFor="issueAuthority">Issue Authority</label>
              <input required id="issueAuthority" type="text" placeholder="Enter issue department" />
              <label htmlFor="issuedState">Issued State</label>
              <input required id="issuedState" type="text" placeholder="Enter issued state" />
              {/* <label htmlFor="issuedDate">Issued Date</label>
              <input required id="issuedDate" type="date" />
              <label htmlFor="expiryDate">Expiry Date</label>
              <input required id="expiryDate" type="date" /> */}
            </div>
          </div>
          </div>  
        </div>
        <button className='btn-form' type="submit">Next</button>
      </form>
      <div>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission logic here
}

export default RegistrationForm;


