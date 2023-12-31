import React from "react";
import './Css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?<span>Login</span>{" "}
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing,i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
