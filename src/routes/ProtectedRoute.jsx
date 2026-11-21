import { Navigate, Outlet } from "react-router";
import Login from "../features/auth/Login";

export default function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("token") == null;
  console.log(isAuthenticated);
  
  if(isAuthenticated){
    return <Navigate to={"/account/login"} replace/>

  }
  return <Outlet/>
}
