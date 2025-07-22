
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './SigninStyle.css';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';

function Signin() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginRequest = (e) => {
    navigate('/'); // Pass the name to RR
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_mzdymyh', // Replace with your EmailJS service ID
        'template_v28jlbs', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
        },
        'syHZOCj1Doq1r3k5W' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Credentials request sent successfully!');
          navigate('/RR', { state: { name: formData.name } }); // Pass the name to RR
        },
        (error) => {
          alert('Failed to send credentials request. Please try again.');
        }
      );
  };

  return (
    <div className="signin wrapper">
      <Nav />

      <div className="center-section">
        <h1>Hello!!</h1>
        <h2>I'm Sarel Sibuyi, welcome to my portfolio website.</h2>
        <p>Please request login credentials to continue login in.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">
            <p>Request credentials</p>
          </button>

          {/* <button className="login-credentials">
            <p>I already have login credentials</p> 
         </button> */}

           <button
            type="button"
            className="login-credentials"
            onClick={() => navigate('/Login')}
          >
            <p>I already have login credentials</p> 
          </button>
        </form>
      </div>

       <div className="image-me">
        <img src="Me 2.png" alt="old photo of me" />
      </div>
      
    </div>
  );
}

export default Signin;