import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './Components/Pages/Firebase/Firebaase';


function ProtectedRoute({ children }) {
  const user = auth.currentUser; // Check if a user is logged in

  if (!user) {
    // If no user is logged in, redirect to the Signin page
    return <Navigate to="/" />;
  }

  // If user is authenticated, render the children (protected content)
  return children;
}

export default ProtectedRoute;