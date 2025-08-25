import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        dob: "",
        password: "",
        confirmPassword: "",
        terms: false,
      },
      errMsg: {},
    };
  }

  handleSubmit = () => {
    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errMsg: errors });
    } else {
      alert("Form submitted successfully!");
    }
  };

  handlInput = (e) => {
    const { name, type, value, checked } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  validate = () => {
    const { formData } = this.state;
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone No. is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.dob.trim()) newErrors.dob = "Date of Birth is required";
    if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long";
    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords must match";
    if (!formData.terms)
      newErrors.terms = "Please agree to the terms and conditions";

    return newErrors;
  };

  render() {
    const { formData, errMsg } = this.state;
    return (
      <>
        <header>
          <div className="logo">VALIDATION</div>
        </header>

        <section>
          <div className="content">
            <h1>Create Account</h1>
            <div className="grid">
              <div>
                <label>First Name *</label>
                <input
                  type="text" name="firstName" value={formData.firstName} onChange={this.handlInput}/>
                <p>{errMsg.firstName}</p>
              </div>
              <div>
                <label>Last Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={this.handlInput}/>
                <p>{errMsg.lastName}</p>
              </div>
            </div>

            <div className="grid">
              <div>
                <label>Email ID *</label>
                <input type="text" name="email" value={formData.email} onChange={this.handlInput}/>
                <p>{errMsg.email}</p>
              </div>
              <div>
                <label>Phone No. *</label>
                <input type="text" name="phone" value={formData.phone} onChange={this.handlInput}/>
                <p>{errMsg.phone}</p>
              </div>
            </div>

            <div className="grid">
              <div>
                <label>Select Country *</label>
                <select name="country" value={formData.country} onChange={this.handlInput}>
                  <option value="">Select....</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="CHINA">China</option>
                  <option value="RUSSIA">Russia</option>
                  <option value="JAPAN">Japan</option>
                </select>
                <p>{errMsg.country}</p>
              </div>
              <div>
                <label>Date of Birth *</label>
                <input type="date" name="dob" value={formData.dob} onChange={this.handlInput}/>
                <p>{errMsg.dob}</p>
              </div>
            </div>

            <div className="grid">
              <div>
                <label>Password *</label>
                <input type="password" name="password" value={formData.password} onChange={this.handlInput}/>
                <p>{errMsg.password}</p>
              </div>
              <div>
                <label>Confirm Password *</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={this.handlInput}/>
                <p>{errMsg.confirmPassword}</p>
              </div>
            </div>

            <div className="terms">
              <input type="checkbox" name="terms" checked={formData.terms} onChange={this.handlInput}/>
              <label>I agree to the Terms & Conditions.</label>
              <p>{errMsg.terms}</p>
            </div>

            <div className="submission">
              <button onClick={this.handleSubmit}>Register</button>
            </div>
          </div>
        </section>

        <footer>COPYRIGHT©2025. ALL RIGHTS RESERVED.</footer>
      </>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import './App.css';
// class App extends Component {
//   constructor(){
//     super(props);
//     this.state={FormData:{
//       firstName:"",
//       lastName:"",
//       email:"",
//       phone:"",
//       country:"",
//       dob:"",
//       password:"",
//       confirmPassword:"",
//       terms:false,
//     }, errMsg:{}};
//   }
//   handleSubmit (){
//     if(!this.validate())
//       return;
//     alert("Successfully Registered!");  
//   }
//   handlInput(e){
//            this.setState({formData:{...this.formData,[e.target.name]:e.target.value}});
//   }

//     handleSubmit = () => {
//     const errors = this.validate();
//     if (Object.keys(errors).length > 0) {
//       this.setState({ errMsg: errors });
//     } else {
//       alert("Form submitted successfully!");
//     }
//   };

//   handlInput = (e) => {
//     const { name, type, value, checked } = e.target;
//     this.setState((prevState) => ({
//       formData: {
//         ...prevState.formData,
//         [name]: type === "checkbox" ? checked : value,
//       },
//     }));
//   };

//   validate(){
//     const {formData}=this.state;
//     const newErrors={};
//     if(!this.formData.firstName.trim())
//        newErrors.firstName="First Name is required";
//       if(!this.formData.lastName.trim())
//         newErrors.lastName="Last Name is required";
//       if(!this.formData.email.trim())
//         newErrors.email="Email is required";
//       if(!this.formData.phone.trim())
//         newErrors.phone="Phone No. is required";
//       if(this.formData.country.trim())
//         newErrors.country="Country is required";
//       if(!this.formData.dob.trim())
//         newErrors.dob="Date of Birthis required";
//       if(!this.formData.password.length<8)
//         newErrors.password="Password must be 8 character long";
//       if(this.formData.confirmPassword!=this.formData.password)
//         newErrors.confirmPassword="password and confirm password must be same";
//       if(!this.formData.terms)
//         newErrors.terms="Please agree to the terms and conditions";
      
//       return newErrors;
//   };


//   render() {
//     const{formData, errMsg}=this.state;
//     return (
//       <>
//         <header>
//                  <div className='logo'>VALIDATION</div>
//         </header>

//         <section>
//                 <div className='content'>
//                   <h1>Create Account</h1>
//                   <div className='grid'>
//                     <div>
//                       <label>First Name *</label>
//                       <input type='text' name='firstName' value={formData.firstName} onChange={this.handleInput}/>
//                       <p>{errMsg.firstName}</p>
//                     </div>
//                      <div>
//                       <label>Last Name *</label>
//                       <input type='text' name='lastName' value={formData.lastName} onChange={this.handleInput}/>
//                       <p>{errMsg.lastName}</p>
//                     </div>
//                   </div>

//                   <div className='grid'>
//                     <div>
//                       <label>Email ID *</label>
//                       <input type='text' name='email' value={formData.email} onChange={this.handleInput} />
//                       <p>{errMsg.email}</p>
//                     </div>
//                      <div>
//                       <label>Phone No. *</label>
//                       <input type='text' name='phone' value={formData.phone} onChange={this.handleInput} />
//                       <p>{errMsg.phone}</p>
//                     </div>
//                   </div>

//                   <div className='grid'>
//                     <div>
//                       <label>Select Country *</label>
//                       <select name='country' value={formData.country} onChange={this.handleInput} >
//                         <option>Select....</option>
//                         <option>India</option>
//                         <option>USA</option>
//                         <option>UK</option>
//                         <option>CHINA</option>
//                         <option>RUSSIA</option>
//                         <option>JAPAN</option>
//                       </select>
//                       <p>{errMsg.country}</p>
//                     </div>
//                      <div>
//                       <label>Date of Birth *</label>
//                       <input type='date' name='dob' value={formData.dob} onChange={this.handleInput}/>
//                       <p>{errMsg.dob}</p>
//                     </div>
//                     </div>
                   
//                    <div className='grid'>
//                     <div>
//                       <label>Password *</label>
//                       <input type='password' name='password' value={formData.password} onChange={this.handleInput}/>
//                       <p>{errMsg.password}</p>
//                     </div>
//                      <div>
//                       <label>Confirm Password *</label>
//                       <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={this.handleInput}/>
//                       <p>{errMsg.confirmPassword}</p>
//                     </div>
//                     </div>
                    
//                   <div className='terms'>
//                     <input type='checkbox' name='terms' value={formData.terms} onChange={this.handleInput}/>
//                     <label>I agree to the Terms & Condtions.</label>
//                     <p>{errMsg.terms}</p>
//                   </div>
                   
//                    <div className='submission'>
//                    <button onClick={()=>this.handleSubmit()}>Register</button>
//                    </div>
//                   </div>
//         </section>
//         <footer>
//                COPYRIGHT©2025. ALL RIGHTS RESERVED.
//         </footer>
//       </>
//     );
//   }
// }

// export default App;
