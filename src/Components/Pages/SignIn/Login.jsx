// import React, { useState } from 'react';
// import Nav from '../Nav/Nav';
// import { useLocation } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// // Import Firebase Auth
// import { auth } from '../Firebase/Firebaase';
// import './SigninStyle.css';


// function Login() {
//   const location = useLocation(); // Access the state passed from Signin
//   const { name } = location.state || {}; // Destructure the name from state

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Clear previous errors

//     try {
//       // Authenticate user with Firebase
//       await signInWithEmailAndPassword(auth, formData.email, formData.password);
//       alert('Login successful!');
//       // Redirect or perform further actions after successful login
//     } catch (err) {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <div className="login wrapper">
//       <Nav />

//       <div className="center-section">
//         <h1>Hi! </h1> {/* Fallback to 'Guest' if name is undefined */}
//         <h2>Have you received the login credentials?</h2>
//         <p>Please login to continue.</p>

//         <form onSubmit={handleSubmit}>
//           <div className="input-wrapper">
//             <label htmlFor="email">Username</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="input-wrapper">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {error && <p className="error">{error}</p>} {/* Display error message */}

//           <button type="submit">
//             <p>Login</p>
//           </button>

//           <button className="login-credentials">
//             <p>I do not have login credentials</p>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './SigninStyle.css';
import { auth } from '../Firebase/Firebaase';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      // Authenticate user with Firebase
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert('Login successful!');
      navigate('/Sarel_Sibuyi_New_Site'); // Redirect to the static folder
    } catch (err) {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login wrapper">
      <Nav />

      <div className="center-section">
        <h1>Hi! </h1>
        <h2>Have you received the login credentials?</h2>
        <p>Please login to continue.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="error">{error}</p>} {/* Display error message */}

          <button type="submit">
            <p>Login</p>
          </button>

          {/* <button className="login-credentials">
            <p>I do not have login credentials</p>
          </button> */}

          <button
            type="button"
            className="login-credentials"
            onClick={() => navigate('/')} // Navigate to Signin page
          >
           <p>I do not have login credentials</p>
          </button>
        </form>
      </div>

      <div className="image-me">
        <img src="Me 2.png" alt="old photo of me" />
      </div>
    </div>
  );
}

export default Login;