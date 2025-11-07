import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token"); // check if user is logged in

  if (!token) {
    // if no token, redirect to login page
    return <Navigate to="/" replace />;
  }

  // if token exists, render the children component
  return children;
}

export default ProtectedRoute;