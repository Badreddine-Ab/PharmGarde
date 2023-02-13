import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { POST } from "../API/Axios";

const ProductRout = () => {
  const [Token, SetToken] = useState("");

  useEffect(() => {
    try {
      SetToken(jwt_decode(localStorage.getItem("token"), { payload: true }));
    } catch (e) {
      localStorage.clear();
    }
  },[]);

  return Token ? <Outlet /> : <Navigate to="/" />;
};
export default ProductRout;
