import React, { useState } from 'react';

import '../assets/login_register/css/util.css'
import '../assets/login_register/css/main.css'

// import '../assets/login_register/vendor/bootstrap/css/bootstrap.min.css'
// import '../assets/login_register/vendor/animate/animate.css'
// import '../assets/login_register/vendor/css-hamburgers/hamburgers.min.css'
// import '../assets/login_register/vendor/select2/select2.min.css'
import '../assets/login_register/fonts/font-awesome-4.7.0/css/font-awesome.min.css'

import '../assets/login_register/vendor/jquery/jquery-3.2.1.min.js'
// import '../assets/login_register/vendor/bootstrap/js/popper.js'
// import '../assets/login_register/vendor/bootstrap/js/bootstrap.min.js'
import '../assets/login_register/vendor/select2/select2.min.js'
import '../assets/login_register/vendor/tilt/tilt.jquery.min.js'


import img from '../assets/login_register/images/img-01.png';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={img} alt="IMG" />
          </div>

          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            <span className="login100-form-title">Member Login</span>

            <div className="wrap-input100 validate-input" data-validate="Valid email is required: example@gmail.com">
              <input className="input100" type="text" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="password" name="pass" placeholder="Password" value={password} onChange={handlePasswordChange} />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button type="submit" className="login100-form-btn">Login</button>
            </div>

            <div className="text-center p-t-12">
              <span className="txt1">Forgot</span>
              <a className="txt2" href="#">Username / Password?</a>
            </div>

            <div className="text-center p-t-136">
              <a className="txt2" href="index1.html">
                Create your Account
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
