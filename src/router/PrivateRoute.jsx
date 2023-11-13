import React from "react";
import Login from "../pages/auth/Login";

export default function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem("access_token");
  return accessToken ? children : <Login/> ;
}
