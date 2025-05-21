import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // ou depuis ton context

  return isAuthenticated ? children : <Navigate to="/dashboard" />;
};

export default PrivateRoute;
