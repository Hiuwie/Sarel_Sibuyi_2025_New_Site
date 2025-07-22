// import './App.css';
// import Login from './Components/Pages/SignIn/Login';
// import RR from './Components/Pages/SignIn/RR';
// import Signin from './Components/Pages/SignIn/Signin';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Signin />} />
//           <Route exact path="/RR" element={<RR/>} />
//           <Route exact path="/Login" element={<Login/>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import './App.css';
import Login from './Components/Pages/SignIn/Login';
import RR from './Components/Pages/SignIn/RR';
import Signin from './Components/Pages/SignIn/Signin';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

function App() {

   useEffect(() => {
    // Simple mobile detection
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = '/Sarel_Sibuyi_New_Site/index.html';
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/RR" element={<RR />} />
          <Route exact path="/Login" element={<Login />} />
          {/* Protected route for the static folder */}
          <Route
            path="/Sarel_Sibuyi_New_Site/*"
            element={
              <ProtectedRoute>
                {/* Redirect to the static folder */}
                <iframe
                  src="/Sarel_Sibuyi_New_Site/index.html"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                  title="Sarel_Sibuyi_New_Site"
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;