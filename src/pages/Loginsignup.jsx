import React from 'react'
import '../pages/LoginSignup.css'
const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-cotainer">
        <h1>
          Signup
        </h1>
        <div className="loginsignupFields">
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Email Address' />
          <input type="Password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="LoginSignup-Login">
          Already have an account?
          <span>Login</span>
          <div className="LoginSignup-Agree">
            <input type="checkbox"  name="" id=""/>
            <p> I Agree Terms&Conditions and Privacy Policy </p>
          </div>
        </p>
      </div>
    </div>
  )
}

export default Loginsignup
