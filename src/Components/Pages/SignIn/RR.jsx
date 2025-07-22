import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import './SigninStyle.css';

function RR() {
  const location = useLocation(); // Access the state passed from Signin
  const { name } = location.state || {}; // Destructure the name from state
  const navigate = useNavigate(); // Initialize the useNavigate hook


  return (
    <div className="request-r wrapper">
      <Nav />

      <div className="center-section">
        <h1>Hi {name || ''}!👋 Request received.</h1> {/* Fallback to 'Guest' if name is undefined */}
        <h2>I will send login credentials to your email within the next 24 hours.</h2>
        <p>In the meanwhile, you can get in touch with me using any of the links above 👉☝️</p>

        {/* <div className="communcations">
          <div className="communication">
            <img src="" alt="linkedin" />
          </div>
          <div className="communication">
            <img src="" alt="whatsapp" />
          </div>
          <div className="communication">
            <img src="" alt="email" />
          </div>
        </div> */}

        {/* <button type="submit">
          <p>I already have login credentials</p>
        </button> */}

         <button
            type="submit"
            className="login-credentials RR-button"
            onClick={() => navigate('/Login')}
          >
            <p>I already have login credentials</p> 
          </button>
      </div>

       <div className="image-me">
        <img src="Me 2.png" alt="old photo of me" />
      </div>

    </div>
  );
}

export default RR;