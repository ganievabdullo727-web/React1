import React from "react";
import { Navigate, useLocation } from "react-router";

const Authflow = ({ children }) => {
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");
  const isLogin = pathname === "/login";

  // уже вошёл, а открыл /login, отправляем на главную
  if (token && isLogin) {
    return <Navigate to="/" replace />;
  }

  // не вошёл, а открыл защищённую страницу, отправляем на /login
  if (!token && !isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Authflow;