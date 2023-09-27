import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../Pages/Home/Home";

const ProtectedRoute = () => {
  const loggedIn = localStorage.getItem("auth");
  // if (loggedIn === "true") return <Home />;
  if (loggedIn === "false" || !loggedIn) return <Navigate to="/login" />;
  else {
    return <Home />;
  }
};

export default ProtectedRoute;
